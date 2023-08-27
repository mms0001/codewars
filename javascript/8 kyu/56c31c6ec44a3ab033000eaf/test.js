const { DataSet } = require('./statistics')
const assert = require('assert')


var myData1 = new DataSet(1,2,3,4,5,6,7)
assert.equal(myData1.data, [1,2,3,4,5,6,7])
assert.equal(myData1.mean, 4)
assert.equal(myData1.variance, 4)
assert.equal(myData1.stdDeviation, 2)

console.log(myData1.data);
myData1.data[6] = 14;

assert.equal(myData1.setMean(), 5)
assert.equal(myData1.mean, 5)
assert.equal(myData1.setVar(), 16)
assert.equal(myData1.variance, 16)
assert.equal(myData1.stdDeviation, 4)