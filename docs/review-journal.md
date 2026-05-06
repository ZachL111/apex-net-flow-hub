# Review Journal

This journal records the domain cases that matter before widening the public API.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 156, lane `ship`
- `stress`: `retry pressure`, score 125, lane `watch`
- `edge`: `route drift`, score 158, lane `ship`
- `recovery`: `socket risk`, score 195, lane `ship`
- `stale`: `packet span`, score 106, lane `watch`

## Note

This file is intentionally plain so the fixture remains the source of truth.
