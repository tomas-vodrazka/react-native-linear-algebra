import dayjs from "dayjs";
import jStat from "jstat";
import { round } from "lodash";
import numeric from "numeric";
import * as tf from "@tensorflow/tfjs";
import {
  LinearSystemSolverType,
  LinearSystemSolver,
  getLinearSolver,
  getRandomLinearSystem,
  useIntegrationWindow,
  getSquareError
} from "../linearAlgebra";

interface TestParams {
  solverType: LinearSystemSolverType;
  rows: number;
  cols: number;
  runs: number;
}

interface TestsResults {
  times: number[];
  correlations: number[];
  msErrors: number[];
}

interface TestResult {
  time: number;
  correlation: number;
  msError: number;
}

export async function testSolver({
  rows,
  cols,
  solverType,
  runs
}: TestParams): Promise<TestsResults> {
  await tf.ready();
  // console.log(tf.ENV.features);
  const solver = getLinearSolver(solverType);
  const times = [];
  const correlations = [];
  const msErrors = [];

  for (let i = 0; i < runs; i += 1) {
    const { x, y } = getRandomLinearSystem(rows, cols, `tets_${i}`);
    const { correlation, time, msError } = await performTest(x, y, solver);
    times.push(time);
    correlations.push(correlation);
    msErrors.push(msError);
  }

  return {
    times,
    correlations,
    msErrors
  };
}

async function performTest(
  x: number[][],
  y: number[],
  solver: LinearSystemSolver
): Promise<TestResult> {
  const start = dayjs();

  const X = useIntegrationWindow(x, 16);
  const w = await solver.solve(X, y);
  const estimatedY = numeric.dot(X, w) as number[];
  const correlation = jStat.corrcoeff(y, estimatedY);

  const end = dayjs();
  const time = end.diff(start, "ms");
  const msError = getSquareError(y, estimatedY) / X.length;

  return {
    correlation: round(correlation, 2) as number,
    time,
    msError: round(msError, 3)
  };
}
