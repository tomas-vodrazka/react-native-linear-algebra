import { getRandomLinearSystem } from "./LinearSystemDataProvider";
import { LinearSystemTestCase } from "./types";

export function getTestCases(): LinearSystemTestCase[] {
  const testCase1 = getRandomLinearSystem(10, 5, "test_case_1");

  return [
    {
      x: testCase1.x,
      y: testCase1.y,
      w: [
        0.28983915563511414,
        0.106247139861728,
        0.13837587161578946,
        -0.005668164809967107,
        0.3709199014771952
      ]
    }
  ];
}
