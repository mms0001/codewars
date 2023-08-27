const { roundTo } =  require('./roundTo')
const assert = require('assert')

assert.equal(roundTo(3.1415926535, 4), 3.1416);
assert.equal(roundTo(4, 5), 4);
assert.equal(roundTo(4.1235343424, 6), 4.123534);
assert.equal(roundTo(5.3035802, 3), 5.304);
assert.equal(roundTo(0.9384930193848595, 15), 0.938493019384860);
assert.equal(roundTo(9.9999, 3), 10);

