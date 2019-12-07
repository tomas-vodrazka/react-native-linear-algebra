import { LinearSystemSolverType } from "../types";
import { TensorFlowMatMulSolver } from "../solvers/TensorFlowMatMulSolver";
import { TensorFlowAPISolver } from "../solvers/TensorFlowAPISolver";
import { TensorFlowGradSolver } from "../solvers/TensorFlowGradSolver";
import { NumericSolver } from "../solvers/NumericSolver";
import { getLinearSolver } from "../LinearSystemSolverProvider";

describe("LinearAlgebraSolverProvider", () => {
  describe("getLinearSolver", () => {
    it("returns TensorFlowMatMul solver for TensorFlowMatMul type", () => {
      const actual = getLinearSolver(
        LinearSystemSolverType.TENSOR_FLOW_MAT_MUL
      );

      expect(actual).toBe(TensorFlowMatMulSolver);
    });

    it("returns TensorFlowAPI solver for TensorFlowAPI type", () => {
      const actual = getLinearSolver(LinearSystemSolverType.TENSOR_FLOW_API);

      expect(actual).toBe(TensorFlowAPISolver);
    });

    it("returns TensorFlowGrad solver for TensorFlowGrad type", () => {
      const actual = getLinearSolver(LinearSystemSolverType.TENSOR_FLOW_GRAD);

      expect(actual).toBe(TensorFlowGradSolver);
    });

    it("returns numeric solver for numeric", () => {
      const actual = getLinearSolver(LinearSystemSolverType.NUMERIC);

      expect(actual).toBe(NumericSolver);
    });
  });
});
