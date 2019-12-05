import { LinearSystemSolver, SolverResult } from "../types";

export function solve(x: number[][], y: number[]): SolverResult {
  return {
    w: [],
    performance: {
      totalTime: 0
    }
  };
}

export const TensorFlowSolver: LinearSystemSolver = {
  solve
};
