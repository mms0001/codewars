const { isSantaClausable } = require('./santaClausable');
const assert = require('assert')


var santa = {
  sayHoHoHo: function() { console.log('Ho Ho Ho!') },
  distributeGifts: function() { console.log('Gifts for all!'); },
  goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
  sayHoHoHo: function() { console.log('Oink Oink!') }
};

assert.equal(isSantaClausable(santa), true);
assert.equal(isSantaClausable(notSanta), false);