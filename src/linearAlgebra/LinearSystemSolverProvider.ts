import { LinearSystemSolver, LinearSystemSolverType } from "./types";
import { TensorFlowMatMulSolver } from "./solvers/TensorFlowMatMulSolver";
import { TensorFlowAPISolver } from "./solvers/TensorFlowAPISolver";
import { TensorFlowGradSolver } from "./solvers/TensorFlowGradSolver";
import { NumericSolver } from "./solvers/NumericSolver";

const typesMapping = {
  [LinearSystemSolverType.TENSOR_FLOW_MAT_MUL]: TensorFlowMatMulSolver,
  [LinearSystemSolverType.TENSOR_FLOW_API]: TensorFlowAPISolver,
  [LinearSystemSolverType.TENSOR_FLOW_GRAD]: TensorFlowGradSolver,
  [LinearSystemSolverType.NUMERIC]: NumericSolver
};

export function getLinearSolver(
  type: LinearSystemSolverType
): LinearSystemSolver {
  return typesMapping[type];
}
