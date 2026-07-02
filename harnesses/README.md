# Harnesses

This directory holds the per-language benchmark harnesses that implement
the scenarios defined in [`scenarios`](../scenarios/).

## Layout

- One subdirectory per language: `harnesses/<language>/`
  (e.g. `harnesses/dotnet/`, `harnesses/rust/`, `harnesses/java/`).
- Each harness uses that language's idiomatic benchmarking framework
  (e.g. BenchmarkDotNet for .NET, Criterion for Rust, JMH for Java).
- Each harness pins the OTel API/SDK package version it benchmarks in its own
  manifest (`csproj`, `Cargo.toml`, `build.gradle`, …), checked into the repo.
  A dependency bot opens a pull request when a new package version is
  published; merging it triggers a new benchmark run.
- Each harness includes a `README.md` describing how to build and run it
  locally and which scenarios it implements.

## What a harness must do

- Implement the workload exactly as defined by the scenario document.
- Emit the scenario's reported metrics (e.g. `ns/op`, `allocations/op`).
- Record the tracked package version and environment metadata with each result
  (see the scenario's "Per-data-point metadata" section).

## Publishing results

Results are published to the GitHub Pages dashboard using
[`benchmark-action/github-action-benchmark`](https://github.com/benchmark-action/github-action-benchmark),
which appends each run as a data point and renders the trend over time. A
harness emits its results as a JSON array of
`{ name, unit, value, extra }` entries (the action's `customSmallerIsBetter`
format), where `extra` carries the per-data-point environment metadata. Since
lower values indicate better performance for every S001 metric, harnesses use
the action's smaller-is-better mode so improvements and regressions are
flagged correctly on the dashboard.

## Ownership

Each `harnesses/<language>/` subfolder is owned, via
[`CODEOWNERS`](../.github/CODEOWNERS), by the approvers of the corresponding
language SIG. Shared content (scenarios, workflows, top-level docs) is owned by
the repository maintainers. This mirrors the ownership model used by
[`opentelemetry.io`](https://github.com/open-telemetry/opentelemetry.io).

## Adding a new language harness

1. Read the scenario document(s) under [`scenarios`](../scenarios/).
2. Create `harnesses/<language>/` with an idiomatic benchmark plus a
   `README.md`.
3. Map "API-only" (and any other scenario terms) to your language's packages,
   as described in the scenario's per-language interpretation section.
4. Add a `CODEOWNERS` entry assigning the folder to your language SIG's
   approvers.
