export interface LinearSystem {
  x: number[][];
  y: number[];
}

export enum LinearSystemSolverType {
  TENSOR_FLOW_MAT_MUL = "TENSOR_FLOW_MAT_MUL",
  TENSOR_FLOW_GRAD = "TENSOR_FLOW_GRAD",
  TENSOR_FLOW_API = "TENSOR_FLOW_API",
  NUMERIC = "NUMERIC"
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
