import * as tf from "@tensorflow/tfjs";
import { LinearSystemSolver } from "../types";

export async function solve(x: number[][], y: number[]): Promise<number[]> {
  const w = tf.variable(
    tf.randomUniform([x[0].length], undefined, undefined, undefined, "init")
  );
  function model(input) {
    return input.dot(w);
  }

  const optimizer = tf.train.adam(0.05 /* learningRate */);
  const tf_y = tf.tensor(y);
  const tf_x = tf.tensor(x);
  // Train for 5 epochs.
  for (let epoch = 0; epoch < 100; epoch++) {
    optimizer.minimize(() => {
      const predYs = model(tf_x);
      const loss = tf.losses.meanSquaredError(tf_y, predYs);
      return loss;
    });
  }
  tf_x.dispose();
  tf_y.dispose();
  const out = (await w.array()) as number[];

  return out;
}

export const TensorFlowAPISolver: LinearSystemSolver = {
  solve
};
