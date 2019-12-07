import { TensorFlowAPISolver } from "../TensorFlowAPISolver";
import { testSolver } from "../SolverTestService";
import "@tensorflow/tfjs-node";

describe("TensorFlowAPISolver", () => {
  testSolver(TensorFlowAPISolver);
});
