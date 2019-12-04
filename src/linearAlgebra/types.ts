export interface SolverPerformance {}

export interface SolverResult {
  w: number[];
  performance?: SolverPerformance;
}

export enum LinearAlgebraSolverType {
  "TENSOR_FLOW" = "TENSOR_FLOW",
  "NUMERIC" = "NUMERIC"
}

export interface LinearAlgebraSolver {
  // solves x*w = y
  solve: (x: number[][], y: number[]) => SolverResult;
}
