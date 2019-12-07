import { TensorFlowMatMulSolver } from "../TensorFlowMatMulSolver";
import { testSolver } from "../SolverTestService";
import "@tensorflow/tfjs-node";

describe("TensorFlowMatMulSolver", () => {
  testSolver(TensorFlowMatMulSolver);
});
