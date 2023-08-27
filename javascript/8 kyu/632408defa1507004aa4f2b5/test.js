const {Class} = require('./double')
const assert = require('assert')

assert.equal(Class.getNumber(),  1, "1st call should return 1");
assert.equal(Class.getNumber(),  2, "2nd call should return 2");
assert.equal(Class.getNumber(),  4, "3rd call should return 4");
assert.equal(Class.getNumber(),  8, "4th call should return 8");
assert.equal(Class.getNumber(), 16, "5th call should return 16");
