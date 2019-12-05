import numeric from "numeric";
import dayjs from "dayjs";
import { flatten } from "mathjs";
import { LinearSystemSolver, SolverResult } from "../types";

const LAMBDA = 0;

export function solve(x: number[][], y: number[]): SolverResult {
  const start = dayjs();
  const xT = numeric.transpose(x);
  const product = numeric.dot(xT, x) as number[][];
  const identityMatrix = numeric.identity(product.length);
  const lambdaMatrix = numeric.add(identityMatrix, LAMBDA);
  const withLambda = numeric.add(product, lambdaMatrix);
  const yMul = numeric.dot(xT, y) as number[];
  const w = numeric.solve(withLambda, yMul);
  const flat = flatten(w) as number[];
  const end = dayjs();

  return {
    w: flat,
    performance: {
      totalTime: end.diff(start, "ms")
    }
  };
}

export const NumericSolver: LinearSystemSolver = {
  solve
};
