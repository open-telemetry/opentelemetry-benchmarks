# .NET harness for Scenario S001

A [BenchmarkDotNet](https://benchmarkdotnet.org/) harness implementing
[Scenario S001](../../scenarios/S001-counter-increment-api-only.md), measuring
`Counter.Add` against `System.Diagnostics.DiagnosticSource` with no
OpenTelemetry SDK registered.

## Run locally

```sh
dotnet run -c Release --project OtelBenchmarks.Dotnet -- --filter '*'
```

The benchmarked `System.Diagnostics.DiagnosticSource` version is pinned in
[`OtelBenchmarks.Dotnet.csproj`](./OtelBenchmarks.Dotnet/OtelBenchmarks.Dotnet.csproj)
and bumped by the dependency bot as new releases ship.
