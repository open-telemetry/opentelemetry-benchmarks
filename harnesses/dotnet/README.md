# .NET harness

[BenchmarkDotNet](https://benchmarkdotnet.org/) harnesses for the OpenTelemetry
benchmark scenarios.

## S001: counter increment, API-only

Implements [Scenario S001](../../scenarios/S001-counter-increment-api-only.md),
measuring `Counter.Add` against `System.Diagnostics.DiagnosticSource` with no
OpenTelemetry SDK registered.

### Run locally

```sh
dotnet run --configuration Release --project OpenTelemetry.Benchmarks -- --filter '*'
```

The benchmarked `System.Diagnostics.DiagnosticSource` (which ships the
`System.Diagnostics.Metrics` API) is provided in-box by the .NET runtime, so its
version tracks the target framework. The SDK is pinned in
[`global.json`](./global.json) and bumped as new .NET releases ship.
