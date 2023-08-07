const { Singleton } = require('./singleton') 
const assert = require('assert')


var obj1 = new Singleton();
var obj2 = new Singleton();

assert.equal(obj1, obj2)
obj1.test = 1
assert.equal(obj1.test, 1)
