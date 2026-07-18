using System.Diagnostics.Metrics;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Exporters.Json;
using BenchmarkDotNet.Running;

namespace OtelBenchmarks.Dotnet;

// Scenario S001: counter increment, API-only.
// See ../../../scenarios/S001-counter-increment-api-only.md for the definition.
//
// API-only: this harness depends on System.Diagnostics.DiagnosticSource (which
// ships the System.Diagnostics.Metrics API) with no OpenTelemetry SDK
// registered, so the Counter resolves to the runtime's built-in no-op path.
[MemoryDiagnoser]
[JsonExporterAttribute.FullCompressed]
public class S001CounterIncrementApiOnly
{
    private static readonly Meter Meter = new("OtelBenchmarks.S001");
    private static readonly Counter<long> Counter =
        Meter.CreateCounter<long>("house.energy.consumed");

    [Benchmark]
    public void CounterAdd() => Counter.Add(
        1,
        new KeyValuePair<string, object?>("house.room", "living_room"),
        new KeyValuePair<string, object?>("house.device", "thermostat"),
        new KeyValuePair<string, object?>("house.action", "set_temperature"));
}

public static class Program
{
    public static void Main(string[] args) =>
        BenchmarkSwitcher.FromAssembly(typeof(Program).Assembly).Run(args);
}
