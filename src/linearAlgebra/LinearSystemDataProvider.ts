import * as mathjs from "mathjs";
import { LinearSystem } from "./types";

function createMathjsContext(seed?: string) {
  if (!seed) {
    return mathjs;
  }

  return mathjs.create(mathjs.all, {
    randomSeed: seed
  });
}

export function getRandomLinearSystem(
  rows: number,
  cols: number,
  seed?: string
): LinearSystem {
  const math = createMathjsContext(seed);
  return {
    x: math.random([rows, cols]) as number[][],
    y: math.random([rows]) as number[]
  };
}
