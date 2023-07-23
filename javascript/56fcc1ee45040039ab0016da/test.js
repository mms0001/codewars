const assert = require('assert')
const { Cube } = require ('./CubesSetters')

var cube = new Cube(1);
assert.equal(cube.length, 1);
assert.equal(cube.surfaceArea, 6);
assert.equal(cube.volume, 1);

var cube = new Cube(2);
assert.equal(cube.surfaceArea, 24);
assert.equal(cube.volume, 8);

cube.surfaceArea = 54;
assert.equal(cube.length, 3);
assert.equal(cube.volume, 27);

cube.surfaceArea = 96;
assert.equal(cube.length, 4);
assert.equal(cube.volume, 64);



