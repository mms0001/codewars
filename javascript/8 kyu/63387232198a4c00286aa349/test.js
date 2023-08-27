const  { Date } = require('./grinch')
const assert = require ('assert');

let d1 = new Date('1957-10-25');
assert.equal(d1.getMonth(), 9);
assert.equal(d1.getDate(), 25);

let d2 = new Date('1957-12-12');
assert.equal(d2.getMonth(), 11);
assert.equal(d2.getDate(), 12);

const d3 = new Date('1957-12-25');
assert.equal(d3.getMonth(), 11);
assert.equal(d3.getDate(), 26, 'Merry Christmas!');