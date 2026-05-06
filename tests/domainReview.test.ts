function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 60, slack: 34, drag: 21, confidence: 65 };
equal(domainReviewScore(item), 156);
equal(domainReviewLane(item), "ship");
