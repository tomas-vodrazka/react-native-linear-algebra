import { NumericSolver } from "../NumericSolver";
import { testSolver } from "../SolverTestService";
import "@tensorflow/tfjs-node";

describe("NumericSolver", () => {
  testSolver(NumericSolver);
});
