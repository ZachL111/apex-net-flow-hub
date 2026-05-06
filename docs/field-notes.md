# Field Notes

This note keeps the networking assumptions visible beside the checks.

The domain cases cover `packet span`, `retry pressure`, `route drift`, and `socket risk`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

The widest spread is between `socket risk` and `packet span`, so those are the first two cases I would preserve during a refactor.

The local verifier covers this data so the notes stay tied to code.
