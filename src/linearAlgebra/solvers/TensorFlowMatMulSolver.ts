import numeric from "numeric";
import * as tf from "@tensorflow/tfjs";
import { LinearSystemSolver } from "../types";

const LAMBDA = 0.01;

export async function solve(x: number[][], y: number[]): Promise<number[]> {
  const tf_x = tf.tensor(x);
  const tf_xT = tf.transpose(tf_x);
  const tf_y = tf.tensor(y);
  const tf_product = tf.matMul(tf_xT, tf_x);

  const tf_identityMatrix = tf.eye(x[0].length);
  const tf_lambdaMatrix = tf_identityMatrix.add(LAMBDA);
  const tf_withLambda = tf_product.add(tf_lambdaMatrix);
  const tf_yMul = tf_xT.dot(tf_y);

  const withLambda = tf_withLambda.arraySync() as number[][];
  const yMul = tf_yMul.arraySync() as number[];

  tf_x.dispose();
  tf_xT.dispose();
  tf_y.dispose();
  tf_product.dispose();
  tf_identityMatrix.dispose();
  tf_lambdaMatrix.dispose();
  tf_withLambda.dispose();
  tf_yMul.dispose();

  const w = numeric.solve(withLambda, yMul);
  // console.log(tf.memory());
  return w;
}

export const TensorFlowMatMulSolver: LinearSystemSolver = {
  solve
};
