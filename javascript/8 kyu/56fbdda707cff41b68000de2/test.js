const { Cube, Cuboid } = require('./Cuboids');
const assert = require('assert')

var cuboid = new Cuboid(1, 2, 3);
assert.equal(cuboid.length, 1);
assert.equal(cuboid.width, 2);
assert.equal(cuboid.height, 3);
assert.equal(cuboid.volume, 6);
assert.equal(cuboid.surfaceArea, 22);

var cuboid = new Cuboid(4, 2, 3);
assert.equal(cuboid.volume, 24);
assert.equal(cuboid.surfaceArea, 52);

var cuboid = new Cuboid(4, 5, 3);
assert.equal(cuboid.volume, 60);
assert.equal(cuboid.surfaceArea, 94);


var cuboid = new Cuboid(4, 5, 6);
assert.equal(cuboid.volume, 120);
assert.equal(cuboid.surfaceArea, 148);


var cuboid = new Cuboid(7, 8, 9);
assert.equal(cuboid.volume, 504);
assert.equal(cuboid.surfaceArea, 382);