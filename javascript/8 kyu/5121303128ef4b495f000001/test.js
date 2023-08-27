const { Person } = require('./greeting')
const assert = require('assert')

var joe = new Person('Joe');

assert.equal(joe.greet('Kate'), 'Hello Kate, my name is Joe')
assert.equal(joe.name, 'Joe')