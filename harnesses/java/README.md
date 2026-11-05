# Java harness

Implements [Scenario S001](../../scenarios/S001-counter-increment-api-only.md)
(counter increment, API-only) for Java.

## What it measures

The cost of a single `LongCounter.add` against the
[`opentelemetry-api`](https://central.sonatype.com/artifact/io.opentelemetry/opentelemetry-api)
artifact with **no SDK registered**. With only the API artifact present,
`GlobalOpenTelemetry.getMeter(...)` returns the API's built-in no-op meter, so
the measured operation includes the no-op call and attribute construction.

Per S001, the three-attribute set is built on every call (the attribute keys
are cached as static `AttributeKey`s, but the `Attributes` container is not).
The harness reports allocated bytes per operation (`B/op`) alongside `ns/op`.

"API-only" for Java means depending on `opentelemetry-api` only, not
`opentelemetry-sdk`. The recorded version against each data point is the
`opentelemetry-api` artifact version, declared in
[`gradle.properties`](gradle.properties) (so Renovate can auto-bump it) and
overridable from CI via `-PotelApiVersion=X.Y.Z`. A dependency bot opens a
pull request when a new version is published; merging it triggers a new
benchmark run.

## Toolchain

The JDK is provisioned by the workflow with
[`actions/setup-java`](https://github.com/actions/setup-java) (Temurin) and the
[Gradle wrapper](gradlew) pins the Gradle version. Both workflows and the Gradle
Java toolchain read the JDK major version from [`.java-version`](.java-version).
This does not pin the JDK patch version or runner hardware; published results
include the runtime version and environment metadata to help interpret changes.

## Framework

Uses [JMH](https://github.com/openjdk/jmh) (via the
[`me.champeau.jmh`](https://github.com/melix/jmh-gradle-plugin) Gradle plugin),
the de-facto Java microbenchmark framework and the one the upstream
[`opentelemetry-java`](https://github.com/open-telemetry/opentelemetry-java)
project uses for its own benchmarks. JMH drives warmup and repeats the
operation enough times for a statistically stable per-operation result, so the
harness does not hand-roll a counting loop. The benchmark returns the per-call
`Attributes` so JMH's implicit blackhole prevents the JIT from eliminating the
attribute construction the scenario requires on every call.

## Run locally

Install a JDK matching [`.java-version`](.java-version) and set `JAVA_HOME` to
its installation directory. Then, from the repository root:

```sh
cd harnesses/java
./gradlew jmh
```

The mean is read from the `avgt` primary metric in
`build/results/jmh/result.json` and published to the dashboard as `ns/op`
(smaller is better). The JMH `gc` profiler also records `gc.alloc.rate.norm`,
published as allocated bytes per operation (`B/op`), matching what the .NET
harness reports. This is not a count of allocated objects.
