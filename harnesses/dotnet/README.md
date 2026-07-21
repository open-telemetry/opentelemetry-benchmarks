# .NET harness

[BenchmarkDotNet](https://benchmarkdotnet.org/) harnesses for the OpenTelemetry
benchmark scenarios.

## S001: counter increment, API-only

Implements [Scenario S001](../../scenarios/S001-counter-increment-api-only.md),
measuring `Counter.Add` against `System.Diagnostics.DiagnosticSource` with no
OpenTelemetry SDK registered.

### Run locally

```sh
dotnet run --configuration Release --project OtelBenchmarks.Dotnet -- --filter '*'
```

The benchmarked `System.Diagnostics.DiagnosticSource` version is pinned in
[`Directory.Packages.props`](./Directory.Packages.props) and bumped by the
dependency bot as new releases ship.
