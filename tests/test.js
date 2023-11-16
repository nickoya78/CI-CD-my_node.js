// tests/test.js

const assert = require("assert");
const { add } = require("../src/index");

describe("Simple Test", () => {
  it("should pass", () => {
    assert.strictEqual(add(1, 1), 2);
  });
});
