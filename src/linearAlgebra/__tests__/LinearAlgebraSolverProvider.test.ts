import { LinearAlgebraSolverType } from "../types";
import { TensorFlowSolver } from "../TensorFlowSolver";
import { NumericSolver } from "../NumericSolver";
import { getLinearSolver } from "../LinearAlgebraSolverProvider";

describe("LinearAlgebraSolverProvider", () => {
  describe("getLinearSolver", () => {
    it("returns TensorFlow solver for TensorFlow type", () => {
      const actual = getLinearSolver(LinearAlgebraSolverType.TENSOR_FLOW);

      expect(actual).toBe(TensorFlowSolver);
    });

    it("returns numeric solver for numeric", () => {
      const actual = getLinearSolver(LinearAlgebraSolverType.NUMERIC);

      expect(actual).toBe(NumericSolver);
    });
  });
});
