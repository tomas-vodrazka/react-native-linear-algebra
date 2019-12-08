import {
  useIntegrationWindow,
  getLinearSystemMeanSquareError,
  getSquareError
} from "../MatrixService";

describe("integrationWindowService", () => {
  describe("getSquareError", () => {
    it("returns square error", () => {
      const y = [8, 8];
      const estimatedY = [6, 6];

      const actual = getSquareError(y, estimatedY);

      expect(actual).toBe(8);
    });
  });

  describe("getMeanSquareError", () => {
    it("returns mean square error", () => {
      const x = [
        [1, 2],
        [1, 2]
      ];

      const y = [8, 8];
      const w = [2, 2];

      const actual = getLinearSystemMeanSquareError(x, y, w);

      expect(actual).toBe(4);
    });
  });

  describe("useIntegrationWindow", () => {
    it("returns a framed matrix", () => {
      const x = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      const actual = useIntegrationWindow(x, 2);

      expect(actual).toEqual([
        [1, 4, 7, 2, 5, 8, 3, 6, 9],
        [4, 7, 0, 5, 8, 0, 6, 9, 0],
        [7, 0, 0, 8, 0, 0, 9, 0, 0]
      ]);
    });

    it("returns a framed matrix for less rows then n", () => {
      const x = [
        [1, 2, 3],
        [4, 5, 6]
      ];

      const actual = useIntegrationWindow(x, 2);

      expect(actual).toEqual([
        [1, 4, 0, 2, 5, 0, 3, 6, 0],
        [4, 0, 0, 5, 0, 0, 6, 0, 0]
      ]);
    });

    it("returns a framed matrix for small n", () => {
      const x = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      const actual = useIntegrationWindow(x, 1);

      expect(actual).toEqual([
        [1, 4, 2, 5, 3, 6],
        [4, 7, 5, 8, 6, 9],
        [7, 0, 8, 0, 9, 0]
      ]);
    });
  });
});
