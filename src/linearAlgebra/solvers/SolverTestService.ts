import numeric from "numeric";
import { LinearSystemSolver } from "../types";
import { getTestCases } from "../LinearSystemTestCasesProvider";

function getSquareError(x: number[][], y: number[], w: number[]): number {
  const estimatedY = numeric.dot(x, w);
  let sum = 0;
  for (let i = 0; i < y.length; i += 1) {
    sum += Math.pow(y[i] - estimatedY[i], 2);
  }

  return sum;
}

export async function testSolver(solver: LinearSystemSolver) {
  getTestCases().forEach((testCase, index) => {
    it(`solves test case number #${index + 1}`, async () => {
      const actual = await solver.solve(testCase.x, testCase.y);

      expect(actual.length).toBe(testCase.w.length);
      console.log(actual);
      const error = getSquareError(testCase.x, testCase.y, actual);
      expect(error).toBeLessThan(1);
      console.log(`Error: ${error}`);
      // actual.forEach((val, i) => {
      //   expect(val).toBeCloseTo(testCase.w[i]);
      // });
    });
  });
}
