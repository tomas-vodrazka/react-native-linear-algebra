export interface LinearSystem {
  x: number[][];
  y: number[];
}

export enum LinearSystemSolverType {
  "TENSOR_FLOW" = "TENSOR_FLOW",
  "NUMERIC" = "NUMERIC"
}

export interface LinearSystemSolver {
  // estimates x*w = y
  solve: (x: number[][], y: number[]) => Promise<number[]>;
}

export interface LinearSystemTestCase {
  x: number[][];
  y: number[];
  w: number[];
}
