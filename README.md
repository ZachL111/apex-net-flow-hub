# apex-net-flow-hub

`apex-net-flow-hub` keeps a focused TypeScript implementation around networking. The project goal is to design a TypeScript verification harness for flow systems, covering format conversion, round-trip fixtures, and failure-oriented tests.

## Why This Exists

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Apex Net Flow Hub Review Notes

`recovery` and `stale` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Capabilities

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/apex-net-flow-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `socket risk` and `packet span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Implementation Shape

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The TypeScript addition stays small enough to inspect in one sitting.

## Local Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Verification

The same command runs the local verification path. The highest-scoring domain case is `recovery` at 195, which lands in `ship`. The most cautious case is `stale` at 106, which lands in `watch`.

## Roadmap

The fixture set is small enough to audit by hand. The next useful expansion is malformed input coverage, not extra surface area.
