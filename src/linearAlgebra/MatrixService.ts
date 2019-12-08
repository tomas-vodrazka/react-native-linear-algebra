import numeric from "numeric";

function getZerosMatrix(rows: number, cols: number): number[][] {
  const matrix = new Array(rows);
  for (let r = 0; r < rows; r += 1) {
    matrix[r] = new Array(cols).fill(0);
  }

  return matrix;
}

export function useIntegrationWindow(x: number[][], n: number): number[][] {
  const numOfRows = x.length;
  const numOfCols = x[0].length;
  const output = getZerosMatrix(numOfRows, numOfCols * (n + 1));

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

export function getLinearSystemMeanSquareError(
  x: number[][],
  y: number[],
  w: number[]
): number {
  const estimatedY = numeric.dot(x, w) as number[];
  const error = getSquareError(y, estimatedY);

  return error / x.length;
}

export function getSquareError(y: number[], estimatedY: number[]): number {
  let sum = 0;
  for (let i = 0; i < y.length; i += 1) {
    sum += Math.pow(y[i] - estimatedY[i], 2);
  }

  return sum;
}
