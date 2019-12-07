import { TensorFlowGradSolver } from "../TensorFlowGradSolver";

import { testSolver } from "../SolverTestService";
import "@tensorflow/tfjs-node";

describe("TensorFlowGradSolver", () => {
  testSolver(TensorFlowGradSolver);
  // it("runs", async () => {
  //   const x = [
  //     [1, 1],
  //     [2, 2],
  //     [3, 3]
  //   ];
  //   const y = [1, 2, 3];

  //   await TensorFlowGradSolver.solve(x, y);

  //   expect(true).toBe(true);
  // });
});
