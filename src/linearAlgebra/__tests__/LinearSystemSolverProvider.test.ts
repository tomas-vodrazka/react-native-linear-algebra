import { LinearSystemSolverType } from "../types";
import { TensorFlowSolver } from "../solvers/TensorFlowSolver";
import { NumericSolver } from "../solvers/NumericSolver";
import { getLinearSolver } from "../LinearSystemSolverProvider";

describe("LinearAlgebraSolverProvider", () => {
  describe("getLinearSolver", () => {
    it("returns TensorFlow solver for TensorFlow type", () => {
      const actual = getLinearSolver(LinearSystemSolverType.TENSOR_FLOW);

      expect(actual).toBe(TensorFlowSolver);
    });

    it("returns numeric solver for numeric", () => {
      const actual = getLinearSolver(LinearSystemSolverType.NUMERIC);

      expect(actual).toBe(NumericSolver);
    });
  });
});
