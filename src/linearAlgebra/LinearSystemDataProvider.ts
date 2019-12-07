import * as tf from "@tensorflow/tfjs";
import { LinearSystem } from "./types";

export function getRandomLinearSystem(
  rows: number,
  cols: number,
  seed?: string
): LinearSystem {
  const tf_x = tf.randomUniform(
    [rows, cols],
    undefined,
    undefined,
    undefined,
    seed
  );
  const tf_y = tf.randomUniform([rows], undefined, undefined, undefined, seed);
  const x = tf_x.arraySync();
  const y = tf_y.arraySync();
  tf_x.dispose();
  tf_y.dispose();

  return {
    x: x as number[][],
    y: y as number[]
  };
}
