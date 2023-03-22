const { sum, minus, multi } = require("../js/sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sub 1 - 2 to equal -1", () => {
  expect(minus(1, 2)).toBe(-1);
});
