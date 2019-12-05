import "@tensorflow/tfjs-node";
import { TensorFlowSolver } from "../TensorFlowSolver";
import { NumericSolver } from "../NumericSolver";
import { getTestCases } from "../../LinearSystemTestCasesProvider";

const solvers = [
  {
    name: "TensorFlow",
    solver: TensorFlowSolver
  },
  {
    name: "Numeric",
    solver: NumericSolver
  }
];

describe("Solvers", () => {
  describe("solve", () => {
    getTestCases().forEach((testCase, index) => {
      solvers.forEach(solver => {
        it(`Solver ${solver.name} solves test case number #${index +
          1}`, async () => {
          const actual = await solver.solver.solve(testCase.x, testCase.y);

          expect(actual.w.length).toBe(testCase.w.length);
          actual.w.forEach((val, i) => {
            expect(val).toBeCloseTo(testCase.w[i]);
          });
        });
      });
    });
  });
});
