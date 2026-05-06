# Failure Modes

For `apex-net-flow-hub`, I would look first for these mistakes:

- `packet span` cases moving lanes without a matching threshold change.
- `route drift` scoring higher after drag increases.
- Duplicate fixture ids hiding a stale golden row.
- README examples drifting away from the verifier.

The local checks are intentionally strict about these cases.
