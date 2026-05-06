function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 87,
    "capacity": 107,
    "latency": 19,
    "risk": 18,
    "weight": 6,
    "score": 165,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 100,
    "capacity": 89,
    "latency": 24,
    "risk": 13,
    "weight": 7,
    "score": 198,
    "decision": "accept"
  },
  {
    "name": "case_3",
    "demand": 66,
    "capacity": 91,
    "latency": 11,
    "risk": 12,
    "weight": 5,
    "score": 154,
    "decision": "review"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
