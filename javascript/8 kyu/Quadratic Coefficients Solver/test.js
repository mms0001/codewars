const { assert } = require('chai');
const { quadratic } = require('./index.js');

assert.sameOrderedMembers(quadratic( 0,  1), [1, -1,   0]);
assert.sameOrderedMembers(quadratic( 1,  1), [1, -2,   1]);
assert.sameOrderedMembers(quadratic(-4, -9), [1, 13,  36]);
assert.sameOrderedMembers(quadratic(-5, -4), [1,  9,  20]);
assert.sameOrderedMembers(quadratic( 4, -9), [1,  5, -36]);
assert.sameOrderedMembers(quadratic( 5, -4), [1, -1, -20]);
