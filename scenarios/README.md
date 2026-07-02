# Benchmark Scenarios

This directory holds the language-agnostic scenario definitions that
language harnesses implement. Each scenario is the single source of truth for
what is measured and how results are reported, so that any language
implementation can produce a conforming harness from the document alone.

## Layout

- One Markdown file per scenario, named `S<n>-<short-slug>.md`
  (e.g. [`S1-counter-increment-api-only.md`](./S1-counter-increment-api-only.md)).
- Scenario IDs (`S1`, `S2`, …) are stable and never reused.
- The matching implementations live under
  [`../harnesses/<language>/`](../harnesses/), one harness per language.

## Each scenario document should define

- Workload — exactly what operation is measured and how (instrument names,
  attribute keys/values, loop shape, threading model).
- Reported metrics — the values each harness must emit (e.g. `ns/op`,
  `allocations/op`) and their "smaller/larger is better" direction.
- Per-data-point metadata — the environment fields recorded with each
  result.
- Per-language interpretation — how the abstract scenario maps to each
  language's API/SDK packages.

## Scenarios

| ID | Scenario | Status |
|----|----------|--------|
| [S1](./S1-counter-increment-api-only.md) | Counter increment, API-only (no SDK configured) | Active |

Additional scenarios (other signals, SDK fast-paths, multi-threaded workloads)
are tracked as future work in
[OTEP 5109](https://github.com/open-telemetry/opentelemetry-specification/pull/5118).
