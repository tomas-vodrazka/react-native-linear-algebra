export interface LinearSystem {
  x: number[][];
  y: number[];
}
export interface SolverResult {
  w: number[];
  performance: SolverPerformance;
}

export interface SolverPerformance {
  totalTime: number;
}

export enum LinearSystemSolverType {
  "TENSOR_FLOW" = "TENSOR_FLOW",
  "NUMERIC" = "NUMERIC"
}

export interface LinearSystemSolver {
  // solves x*w = y
  solve: (x: number[][], y: number[]) => Promise<SolverResult>;
}

export interface LinearSystemTestCase {
  x: number[][];
  y: number[];
  w: number[];
}
