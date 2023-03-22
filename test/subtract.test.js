const { add, subtract } = require("../js/subtract");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("sub to be", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("sub not to be", () => {
  expect(subtract(5, 2)).not.toBe(2);
});
