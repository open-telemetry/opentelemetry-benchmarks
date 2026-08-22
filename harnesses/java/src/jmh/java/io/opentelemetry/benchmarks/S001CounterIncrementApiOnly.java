// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

// Scenario S001: counter increment, API-only.
// See scenarios/S001-counter-increment-api-only.md for the definition.
//
// API-only: this harness depends on the `opentelemetry-api` artifact only (no
// `opentelemetry-sdk`), so `GlobalOpenTelemetry.getMeter(...)` returns the API's
// built-in no-op meter and `counter.add(...)` hits the no-op path.

package io.opentelemetry.benchmarks;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.common.Attributes;
import io.opentelemetry.api.metrics.LongCounter;
import io.opentelemetry.api.metrics.Meter;
import java.util.concurrent.TimeUnit;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.OutputTimeUnit;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;

@State(Scope.Benchmark)
@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
public class S001CounterIncrementApiOnly {

    private LongCounter counter;

    @Setup
    public void setup() {
        Meter meter = GlobalOpenTelemetry.getMeter("opentelemetry.benchmarks.s001");
        counter = meter.counterBuilder("house.energy.consumed").build();
    }

    // Returning the per-call Attributes hands the allocation to JMH's implicit
    // Blackhole, preventing the JIT from dead-code-eliminating the attribute
    // construction that the scenario requires on every call.
    @Benchmark
    public Attributes counterIncrement() {
        Attributes attributes =
                Attributes.builder()
                        .put("house.room", "living_room")
                        .put("house.device", "thermostat")
                        .put("house.action", "set_temperature")
                        .build();
        counter.add(1L, attributes);
        return attributes;
    }
}
