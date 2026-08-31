window.BENCHMARK_DATA = {
  "lastUpdate": 1788157031353,
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
      },
      {
        "commit": {
          "author": {
            "email": "martin@martincostello.com",
            "name": "Martin Costello",
            "username": "martincostello"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2a6a534b23968e3c55403fd0dd9463d74d80c05",
          "message": "Add BenchmarkDotNet to step summary (#26)\n\n* Add BenchmarkDotNet to step summary\n\nGenerate GitHub results from benchmarks and write to the GitHub Actions step summary.\n\n* Address feedback\n\nHandle the case that no results are output.",
          "timestamp": "2026-08-19T07:51:42-07:00",
          "tree_id": "f622f3a8d1f626816868b311e73897eee54dd9b2",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/f2a6a534b23968e3c55403fd0dd9463d74d80c05"
        },
        "date": 1787151162425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 3.1818678642312688,
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
      },
      {
        "commit": {
          "author": {
            "email": "cijo.thomas@gmail.com",
            "name": "Cijo Thomas",
            "username": "cijothomas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "073ee7b4270a0e5d93b60d13ef3cf450b07533ad",
          "message": "Add Rust harness for scenario S001 (#28)",
          "timestamp": "2026-08-21T00:42:45-07:00",
          "tree_id": "4dec4a351983e7d38d3f3ac21722966c19d91f0e",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/073ee7b4270a0e5d93b60d13ef3cf450b07533ad"
        },
        "date": 1787298226744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 3.1720323321911006,
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
    ],
    "Rust / S001 (opentelemetry 0.32.0)": [
      {
        "commit": {
          "author": {
            "email": "cijo.thomas@gmail.com",
            "name": "Cijo Thomas",
            "username": "cijothomas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "073ee7b4270a0e5d93b60d13ef3cf450b07533ad",
          "message": "Add Rust harness for scenario S001 (#28)",
          "timestamp": "2026-08-21T00:42:45-07:00",
          "tree_id": "4dec4a351983e7d38d3f3ac21722966c19d91f0e",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/073ee7b4270a0e5d93b60d13ef3cf450b07533ad"
        },
        "date": 1787298286002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 12.166196033076096,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.97.0 (2d8144b78 2026-07-07)\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1022-azure\nframework=Criterion 0.5.1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cijo.thomas@gmail.com",
            "name": "Cijo Thomas",
            "username": "cijothomas"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80fb6038c6649b0806a53579e321405e9a90e75a",
          "message": "Address dashboard and Rust harness review follow-ups (#29)",
          "timestamp": "2026-08-21T08:52:32-07:00",
          "tree_id": "8e56617f1721da506075c90b537e0c8967b1742c",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/80fb6038c6649b0806a53579e321405e9a90e75a"
        },
        "date": 1787327622383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 10.224273834440726,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.97.0 (2d8144b78 2026-07-07)\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1022-azure\nframework=Criterion 0.5.1"
          }
        ]
      },
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
          "id": "b4850778a39ff95391edbc54938cf3069d155f54",
          "message": "Lock file maintenance (#31)",
          "timestamp": "2026-08-24T07:34:36+01:00",
          "tree_id": "cb6726726a5afdd8bcfb4033a9573b0625ee668d",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/b4850778a39ff95391edbc54938cf3069d155f54"
        },
        "date": 1787553337015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 14.449928821163398,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.97.0 (2d8144b78 2026-07-07)\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1022-azure\nframework=Criterion 0.5.1"
          }
        ]
      },
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
          "id": "1dfd047e686cd9773e6688fdcb11a38dc67f9b38",
          "message": "Pin Rust crate criterion to =0.5.1 (#32)",
          "timestamp": "2026-08-26T07:16:20+01:00",
          "tree_id": "73e8632cc39f8c9d3b95933578309b4d45846170",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/1dfd047e686cd9773e6688fdcb11a38dc67f9b38"
        },
        "date": 1787725039283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 12.284310194622638,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.97.0 (2d8144b78 2026-07-07)\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1022-azure\nframework=Criterion 0.5.1"
          }
        ]
      },
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
          "id": "2adaf963d8ac330682b2aaf21518601f12eaf490",
          "message": "Bump Rust to v1.98.0 (#37)",
          "timestamp": "2026-08-26T07:19:17+01:00",
          "tree_id": "2ffb98b8e35c5554dd157b0bf128575d4267529d",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/2adaf963d8ac330682b2aaf21518601f12eaf490"
        },
        "date": 1787725213955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 11.857625303914693,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.98.0 (88d9e12ae 2026-08-18)\ncpu=AMD EPYC 7763 64-Core Processor\nkernel=6.17.0-1022-azure\nframework=Criterion 0.5.1"
          }
        ]
      },
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
          "id": "a648ba84a068cf7d429977aba42f509f02a5fa67",
          "message": "Bump Rust crate criterion to v0.8.2 (#36)",
          "timestamp": "2026-08-26T07:24:00+01:00",
          "tree_id": "fe668bcc87285b13ef462d6a5b9aa395dc1b5792",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/a648ba84a068cf7d429977aba42f509f02a5fa67"
        },
        "date": 1787725510676,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 7.869731868494601,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.98.0 (88d9e12ae 2026-08-18)\ncpu=Intel(R) Xeon(R) 6973P-C\nkernel=6.17.0-1022-azure\nframework=Criterion 0.8.2"
          }
        ]
      },
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
          "id": "802d74bd53a0147cc5a18051230165f4ba257f27",
          "message": "Lock file maintenance (#38)",
          "timestamp": "2026-08-31T07:16:11+01:00",
          "tree_id": "b06cf8face8419a01bd501f93f9f0e995149e438",
          "url": "https://github.com/open-telemetry/opentelemetry-benchmarks/commit/802d74bd53a0147cc5a18051230165f4ba257f27"
        },
        "date": 1788157030856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "counter increment",
            "value": 14.45946148180862,
            "unit": "ns",
            "extra": "runner=ubuntu24\nruntime=rustc 1.98.0 (88d9e12ae 2026-08-18)\ncpu=AMD EPYC 9V74 80-Core Processor\nkernel=6.17.0-1022-azure\nframework=Criterion 0.8.2"
          }
        ]
      }
    ]
  }
}