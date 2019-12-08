import numeric from "numeric";
import * as tf from "@tensorflow/tfjs";
import { LinearSystemSolver } from "../types";

const LAMBDA = 0;

export async function solve(x: number[][], y: number[]): Promise<number[]> {
  const tf_x = tf.tensor(x);
  const tf_xT = tf.transpose(tf_x);
  const xT = numeric.transpose(x);
  const tf_product = tf.matMul(tf_xT, tf_x);
  const product = (await tf_product.array()) as number[][];
  tf_product.dispose();
  tf_x.dispose();
  tf_xT.dispose();
  const identityMatrix = numeric.identity(product.length);
  const lambdaMatrix = numeric.add(identityMatrix, LAMBDA);
  const withLambda = numeric.add(product, lambdaMatrix);
  const yMul = numeric.dot(xT, y) as number[];
  const w = numeric.solve(withLambda, yMul);

  return w;
}

export const TensorFlowMatMulSolver: LinearSystemSolver = {
  solve
};
