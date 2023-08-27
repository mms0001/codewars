const { assert } = require('chai');

describe('Tests', () => {
  it('Sample Tests', () => {
    const legalMoves = [1, 2, 3];
    for (let sticks = 1; sticks <= 3; sticks++) {
      const actual = makeMove(sticks);
      assert.oneOf(actual, legalMoves, `Illegal move for sticks = ${sticks}`);
      assert.strictEqual(actual, sticks, `Suboptimal move for sticks = ${sticks}`);
    }
  });
});