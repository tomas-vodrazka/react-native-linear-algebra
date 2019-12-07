import * as tf from "@tensorflow/tfjs";
import { LinearSystemSolver } from "../types";

const LEARNING_RATE = 0.05;
const NUM_OF_LOOPS = 100;

export async function solve(x: number[][], y: number[]): Promise<number[]> {
  const tf_y = tf.tensor(y);
  const tf_x = tf.tensor(x);
  const w = tf.variable(
    tf.randomUniform([x[0].length], null, null, null, "grad")
  );
  // const w = tf.variable(tf.tensor([1, 1]));

  const loss = (estW: tf.Tensor) => {
    return tf_x
      .dot(estW)
      .sub(tf_y)
      .pow(2)
      .sum()
      .div(tf_x.size);
  };

  const g = tf.grads(loss);

  for (let i = 0; i < NUM_OF_LOOPS; i += 1) {
    const [dw] = g([w]);
    w.assign(w.sub(dw.mul(LEARNING_RATE)));
  }

  const res = w.arraySync() as number[];

  tf_x.dispose();
  tf_y.dispose();
  w.dispose();

  return res;
}

export const TensorFlowGradSolver: LinearSystemSolver = {
  solve
};
