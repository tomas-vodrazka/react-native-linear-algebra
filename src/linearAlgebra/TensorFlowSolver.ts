import { LinearAlgebraSolver, SolverResult } from "./types";

export function solve(x: number[][], y: number[]): SolverResult {
  return {
    w: []
  };
}

export const TensorFlowSolver: LinearAlgebraSolver = {
  solve
};
