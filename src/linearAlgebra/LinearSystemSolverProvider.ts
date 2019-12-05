import { LinearSystemSolver, LinearSystemSolverType } from "./types";
import { TensorFlowSolver } from "./solvers/TensorFlowSolver";
import { NumericSolver } from "./solvers/NumericSolver";

const typesMapping = {
  [LinearSystemSolverType.TENSOR_FLOW]: TensorFlowSolver,
  [LinearSystemSolverType.NUMERIC]: NumericSolver
};

export function getLinearSolver(
  type: LinearSystemSolverType
): LinearSystemSolver {
  return typesMapping[type];
}
