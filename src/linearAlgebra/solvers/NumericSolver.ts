import numeric from "numeric";
import { flatten } from "mathjs";
import { LinearSystemSolver } from "../types";

const LAMBDA = 0;

export async function solve(x: number[][], y: number[]): Promise<number[]> {
  const xT = numeric.transpose(x);
  const product = numeric.dot(xT, x) as number[][];
  const identityMatrix = numeric.identity(product.length);
  const lambdaMatrix = numeric.add(identityMatrix, LAMBDA);
  const withLambda = numeric.add(product, lambdaMatrix);
  const yMul = numeric.dot(xT, y) as number[];
  const w = numeric.solve(withLambda, yMul);
  const flat = flatten(w) as number[];

  return flat;
}

export const NumericSolver: LinearSystemSolver = {
  solve
};
