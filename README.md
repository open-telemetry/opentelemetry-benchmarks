# OpenTelemetry Benchmarks

This repository is the project-owned home for cross-language OpenTelemetry
performance scenarios. It hosts shared scenario definitions, per-language
harnesses, and a public dashboard that tracks release-over-release results
across language implementations.

It is being established as part of the
[Central OpenTelemetry Benchmarks Repository](https://github.com/open-telemetry/community/blob/main/projects/central-benchmarks-repository.md)
project, with the technical proposal captured in
[OTEP 5109](https://github.com/open-telemetry/opentelemetry-specification/pull/5118).

## Repository layout

- [`scenarios/`](scenarios/) - language-agnostic scenario definitions; the
  single source of truth for what each benchmark measures and how results are
  reported. Start with
  [Scenario S001](scenarios/S001-counter-increment-api-only.md).
- [`harnesses/`](harnesses/) - per-language harnesses (`harnesses/<language>/`)
  that implement the scenarios using each language's idiomatic benchmarking
  framework.

## Maintainers

- [Cijo Thomas](https://github.com/cijothomas), Microsoft
- [Martin Costello](https://github.com/martincostello), Grafana Labs

For more information about the maintainer role, see the [community repository](https://github.com/open-telemetry/community/blob/main/guides/contributor/membership.md#maintainer).

## Approvers

There are currently no approvers for this repository.

For more information about the approver role, see the [community repository](https://github.com/open-telemetry/community/blob/main/guides/contributor/membership.md#approver).
