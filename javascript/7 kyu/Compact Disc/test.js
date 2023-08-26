const { assert } = require("chai");

function doTest(n, expected) {
  assert.strictEqual(encodeCD(n), expected, `Input=${n}`);
}

describe("EncodeCD tests", () => {
  it("Sample tests", () => {
    doTest(  5, "PLLPPPPPP")  //   5 = 00000101
    doTest( 16, "PPPPPLLLL")  //  16 = 00010000
    doTest( 63, "PLPLPLPPP")  //  63 = 00111111
    doTest(222, "PPLPLPPLP")  // 222 = 11011110
  });
});
