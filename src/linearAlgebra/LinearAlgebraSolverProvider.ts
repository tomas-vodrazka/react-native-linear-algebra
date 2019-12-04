import { LinearAlgebraSolver, LinearAlgebraSolverType } from "./types";
import { TensorFlowSolver } from "./TensorFlowSolver";
import { NumericSolver } from "./NumericSolver";

const typesMapping = {
  [LinearAlgebraSolverType.TENSOR_FLOW]: TensorFlowSolver,
  [LinearAlgebraSolverType.NUMERIC]: NumericSolver
};

export function getLinearSolver(
  type: LinearAlgebraSolverType
): LinearAlgebraSolver {
  return typesMapping[type];
}
