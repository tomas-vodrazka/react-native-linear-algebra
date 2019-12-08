import { LinearSystemSolver, getLinearSystemMeanSquareError } from "../";
import { getTestCases } from "../LinearSystemTestCasesProvider";

export async function testSolver(solver: LinearSystemSolver) {
  getTestCases().forEach((testCase, index) => {
    it(`solves test case number #${index + 1}`, async () => {
      const actual = await solver.solve(testCase.x, testCase.y);

      expect(actual.length).toBe(testCase.w.length);
      console.log(actual);
      const error = getLinearSystemMeanSquareError(
        testCase.x,
        testCase.y,
        actual
      );
      expect(error).toBeLessThan(0.1);
      console.log(`Error: ${error}`);
      actual.forEach((val, i) => {
        expect(val).toBeCloseTo(testCase.w[i]);
      });
    });
  });
}
