import { getRandomLinearSystem } from "./LinearSystemDataProvider";
import { LinearSystemTestCase } from "./types";

export function getTestCases(): LinearSystemTestCase[] {
  const testCase1 = getRandomLinearSystem(10, 5, "test_case_1");

  return [
    {
      x: testCase1.x,
      y: testCase1.y,
      w: [
        0.232198922279936,
        0.21331903433603422,
        0.20389118292898464,
        0.10502241319937368,
        0.19470209861392915
      ]
    }
  ];
}
