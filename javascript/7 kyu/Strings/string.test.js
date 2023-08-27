
const toString = require("./index.js");
const  assert  = require("assert");

function doTest(n, expected) {
    assert.strictEqual(toString(n), expected, `Input=${n}`);
}
  
doTest((123).toString(), "123");
doTest(Math.PI.toString(), "3.141592653589793");
doTest(Math.E.toString(), "2.718281828459045");
doTest(true.toString(), "true");
doTest(false.toString(), "false");
doTest([1,2,3,4,5].toString().replace(/\s+/g, ""), "[1,2,3,4,5]");
