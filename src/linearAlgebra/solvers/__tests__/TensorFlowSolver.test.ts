import { TensorFlowSolver } from "../TensorFlowSolver";
import { getTestCases } from "../../LinearSystemTestCasesProvider";

describe("NumericSolver", () => {
  describe("solve", () => {
    getTestCases().forEach((testCase, index) => {
      it(`solves a test case number #${index + 1}`, () => {
        const actual = TensorFlowSolver.solve(testCase.x, testCase.y);

        expect(actual.w.length).toBe(testCase.w.length);
        actual.w.forEach((val, i) => {
          expect(val).toBeCloseTo(testCase.w[i]);
        });
      });
    });
  });
});
