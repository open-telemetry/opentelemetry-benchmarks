# Scenario S001: Counter increment, API-only

Defines the first cross-language benchmark scenario for this repository, as
proposed in
[OTEP 5109](https://github.com/open-telemetry/opentelemetry-specification/pull/5118).

This document is the single source of truth for the scenario. Any language
implementation should be able to produce a conforming harness from this
document alone. See [`harnesses`](../harnesses/) for existing
implementations.

## Motivation

The OpenTelemetry API is required to be a no-op when no SDK is configured -
this holds across signals, including
[metrics](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/metrics/api.md),
[traces](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/trace/api.md),
and [logs](https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/logs/api.md).
OpenTelemetry's vision is for [telemetry to be built-in](https://opentelemetry.io/community/mission/#telemetry-should-be-built-in)
to every library and framework, so the first
question a library owner asks is: *"what does this cost when no SDK is
configured?"* A high no-op cost directly slows down the instrumented library.
S001 measures exactly that cost and tracks it release-over-release.

While this no-op requirement applies to all signals, S001 focuses on the metrics
API as the first scenario; equivalent API-only scenarios for traces and logs
are reasonable follow-up work. Concretely, S001 measures the cost of a single
counter increment, defined below.

## Definition

- API-only: depends only on the OTel metrics API package; no SDK package
  is referenced or loaded. With no SDK registered, the instrument resolves to
  the API's built-in no-op implementation.
- Workload: the measured operation is a single increment of a `Counter`
  instrument named `house.energy.consumed` by `1`, with the same attribute
  values on every call.
- Attributes: each call constructs and passes the same set of three string
  attributes inline (no hoisting/caching of an attribute container across
  iterations), matching how application code typically issues measurements
  with per-call attribute values:
  - `house.room` = `"living_room"`
  - `house.device` = `"thermostat"`
  - `house.action` = `"set_temperature"`
- Threading: single-threaded (one OS thread). Async or coroutine-style
  code is acceptable where idiomatic. Multi-threaded and contended variants are out
  of scope for S001 and deferred to follow-up scenarios.
- Measurement: the measured unit is one counter increment. Each harness uses
  its language's benchmarking framework (BenchmarkDotNet, Criterion, JMH, ...)
  to drive warmup and repeat the operation enough times for a statistically
  stable per-operation result; the scenario intentionally fixes neither an
  iteration count nor a run duration, leaving that to the framework.
  Harnesses must not hand-roll a manual counting loop that the
  compiler/JIT could hoist or eliminate.

## Reported metrics

Per run, the harness reports:

- `ns/op` - median nanoseconds per counter increment.
- `allocations/op` - heap allocations per operation, where the language
  exposes it; `bytes/op` optional.

For all reported metrics, lower values indicate better performance.

## Per-data-point metadata

Each published data point carries an `extra` field with the execution
environment as `key=value` pairs, one per line, so trend breaks caused by the
environment (rather than the implementation) can be identified:

- `runner` - CI runner image label.
- `runtime` - language runtime version (e.g. `.NET 8.0.x`, `rustc 1.x.y`).
- `cpu` - CPU model (e.g. `model name` from `/proc/cpuinfo`).
- `kernel` - `uname -r`.
- `framework` - benchmarking framework name and version.

The version recorded against each data point is the version of the tracked
API/SDK package the harness benchmarks (see per-language notes below).

## Per-language interpretation

_"API-only"_ maps to a specific package per language. Each harness pins and
records the version of that package against every data point.

- .NET - The metrics API ships in the runtime
  (`System.Diagnostics.Metrics`) via the
  [`System.Diagnostics.DiagnosticSource`](https://www.nuget.org/packages/System.Diagnostics.DiagnosticSource)
  NuGet package. "API-only" means depending on that package with no
  OpenTelemetry SDK registered. The recorded version is the
  `System.Diagnostics.DiagnosticSource` package version.
- Rust - The API lives in the
  [`opentelemetry`](https://crates.io/crates/opentelemetry) crate; the SDK is
  the separate `opentelemetry_sdk` crate. "API-only" means depending on
  `opentelemetry` only, so `global::meter(...)` returns the crate's no-op
  meter. The recorded version is the `opentelemetry` crate version.
- Java - The API lives in the
  [`opentelemetry-api`](https://central.sonatype.com/artifact/io.opentelemetry/opentelemetry-api)
  artifact; the SDK is `opentelemetry-sdk`. "API-only" means depending on
  `opentelemetry-api` only, so `GlobalOpenTelemetry.getMeter(...)` returns the
  API's no-op meter. The recorded version is the `opentelemetry-api` artifact
  version.

Languages not listed here follow the same rule: depend only on that
language's OTel metrics API package, with no SDK registered, and record that
package's version against each data point.
