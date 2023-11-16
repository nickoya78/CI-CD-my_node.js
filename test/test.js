const assert = require("assert");
const { add } = require("../src/index");
describe("Addition", () => {
  it("should add two numbers correctly", () => {
    assert.strictEqual(add(2, 3), 5);
  });
  it("should handle negative numbers", () => {
    assert.strictEqual(add(-1, 1), 0);
  });
});
