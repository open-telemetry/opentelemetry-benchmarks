// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

// Scenario S001: counter increment, API-only.
// See ../../../scenarios/S001-counter-increment-api-only.md for the definition.
//
// API-only: this harness depends on the `opentelemetry` crate only (no
// `opentelemetry_sdk`), so `global::meter(...)` returns the crate's built-in
// no-op meter and `counter.add(...)` hits the no-op path.

use std::hint::black_box;

use criterion::{criterion_group, criterion_main, Criterion};
use opentelemetry::{global, KeyValue};

fn counter_increment(c: &mut Criterion) {
    let meter = global::meter("opentelemetry.benchmarks.s001");
    let counter = meter.u64_counter("house.energy.consumed").build();

    c.bench_function("counter increment", |b| {
        b.iter(|| {
            counter.add(
                black_box(1),
                &[
                    KeyValue::new("house.room", "living_room"),
                    KeyValue::new("house.device", "thermostat"),
                    KeyValue::new("house.action", "set_temperature"),
                ],
            );
        });
    });
}

criterion_group! {
    name = benches;
    config = Criterion::default()
        .warm_up_time(std::time::Duration::from_secs(1))
        .measurement_time(std::time::Duration::from_secs(3));
    targets = counter_increment
}
criterion_main!(benches);
