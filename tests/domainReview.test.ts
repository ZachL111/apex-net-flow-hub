import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 60, slack: 34, drag: 21, confidence: 65 };
assert.equal(domainReviewScore(item), 156);
assert.equal(domainReviewLane(item), "ship");
