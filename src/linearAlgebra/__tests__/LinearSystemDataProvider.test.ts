import { getRandomLinearSystem } from "../LinearSystemDataProvider";

describe("LinearSystemDataProvider", () => {
  describe("getRandomLinearSystem", () => {
    it("returns a linear system", () => {
      const rows = 10;
      const cols = 5;
      const actual = getRandomLinearSystem(rows, cols);

      expect(actual.x.length).toBe(rows);
      expect(actual.x[0].length).toBe(cols);
      expect(actual.y.length).toBe(rows);
    });

    it("returns a linear system for a random seed", () => {
      const rows = 10;
      const cols = 5;
      const actual = getRandomLinearSystem(rows, cols, "random_seed");

      expect(actual).toMatchSnapshot();
    });
  });
});
