const { Counter } = require('./Numberlikecounter');
const assert = require('assert')


var c = new Counter();
assert.equal(c.incr(), 2);
assert.equal(c.incr(), 3);
assert.equal(c.incr(), 4);
assert.equal(c > 2 , true);




