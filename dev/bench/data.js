window.BENCHMARK_DATA = {
  "lastUpdate": 1787146669026,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-benchmarks",
  "entries": {
    ".NET / S001 (.NET 10.0.11)": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87b090888e692219b72a69aa978e1264a5fc4d42",
          "message": "Bump actions/checkout action to v7.0.1 (#23)",
          "timestamp": "2026-08-19T07:09:36+01:00",
          "tree_id": "f2ba90edcbaf071fb1eb7b94b02f35609858c097",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/87b090888e692219b72a69aa978e1264a5fc4d42"
        },
        "date": 1787146668571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 3.179863251745701,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.400\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1022-azure\nframework=BenchmarkDotNet"
          },
          {
            "name": "counter increment allocations",
            "value": 0,
            "unit": "B/op",
            "extra": "runner=ubuntu24\nruntime=.NET 10.0.400\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1022-azure\nframework=BenchmarkDotNet"
          }
        ]
      }
    ]
  }
}