const { Song } = require('./song')
const assert = require('assert');



let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

assert.strictEqual(mountMoose.title, 'Mount Moose');
assert.strictEqual(mountMoose.artist, 'The Snazzy Moose');
assert.strictEqual(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']), 5);
assert.strictEqual(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']), 2);
assert.strictEqual(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']), 2);
assert.strictEqual(mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE']), 1);
assert.strictEqual(mountMoose.howMany(['Jack', 'jacK']), 1);