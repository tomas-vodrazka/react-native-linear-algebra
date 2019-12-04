import { zeros } from "mathjs";

const INTEGRATION_WINDOW_SIZE = 16;

export function useIntegrationWindow(
  x: number[][],
  n: number = INTEGRATION_WINDOW_SIZE
): number[][] {
  const numOfRows = x.length;
  const numOfCols = x[0].length;
  const output = zeros([numOfRows, numOfCols * (n + 1)]) as number[][];

  for (let c = 0; c < numOfCols; c += 1) {
    for (let r = numOfRows - 1; r >= 0; r -= 1) {
      for (let i = 0; i < n + 1; i += 1) {
        if (i === 0) {
          output[r][c * (n + 1)] = x[r][c];
        } else if (r < numOfRows - 1) {
          output[r][c * (n + 1) + i] = output[r + 1][c * (n + 1) + i - 1];
        }
      }
    }
  }

  return output;
}
