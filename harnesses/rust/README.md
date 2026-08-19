# Rust harness

Implements [Scenario S001](../../scenarios/S001-counter-increment-api-only.md)
(counter increment, API-only) for Rust.

## What it measures

The cost of a single `Counter::add` against the
[`opentelemetry`](https://crates.io/crates/opentelemetry) crate with **no SDK
registered**. With only the API crate present, `global::meter(...)` returns the
crate's built-in no-op meter, so the call hits the no-op path - exactly the cost
a library pays for being instrumented when the application has not configured an
SDK.

"API-only" for Rust means depending on `opentelemetry` only, not
`opentelemetry_sdk`. The recorded version against each data point is the
`opentelemetry` crate version, pinned in [`Cargo.toml`](Cargo.toml) (and locked
in [`Cargo.lock`](Cargo.lock)). A dependency bot opens a pull request when a new
version is published; merging it triggers a new benchmark run.

## Framework

Uses [Criterion](https://crates.io/crates/criterion), the same benchmarking
framework the upstream
[`opentelemetry-rust`](https://github.com/open-telemetry/opentelemetry-rust)
project uses for its own counter benchmarks. Criterion drives warmup and repeats
the operation enough times for a statistically stable per-operation result, so
the harness does not hand-roll a counting loop.

## Run locally

```sh
cargo bench --bench s001_counter_increment_api_only
```

The mean is read from
`target/criterion/counter increment/new/estimates.json` and published to the
dashboard as `ns/op` (smaller is better). Criterion does not measure heap
allocations, so `allocations/op` is not reported for Rust; the no-op `add` path
does not allocate.
