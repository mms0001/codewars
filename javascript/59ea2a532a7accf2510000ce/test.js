const { Journey } = require('./ballons')
const assert = require('assert')

var letterToEllie = {'weight': 0.004536};
var house = {'weight': 45000};
var pushCart = {'weight': 95};
var lawnChair = {'weight': 5};

var flyingCart = new Journey(pushCart, 0, 50);
var loveOfMyLife = new Journey(letterToEllie, 0, 1);
var gravityFalls = new Journey(house, 2, 20622);

assert.equal(flyingCart.isPossible(), false, "should be false as 50 balloons is not enough!");
assert.equal(loveOfMyLife.isPossible(), true, "should be true as 1 balloon is just enough to express one's love on a sheet of paper!");
assert.equal(gravityFalls.isPossible(), false, "should be false as 20622 balloons is not enough!");

var gravityFallsTake2 = new Journey(house, 2, 9500000);
var flyingCartTake2 = new Journey(pushCart, 0, 20622);
assert.equal(flyingCartTake2.isPossible(), true, "should be true as the amount of balloons used by animators to lift up the house is just enough to lift up the push cart!");
assert.equal(gravityFallsTake2.isPossible(), true, "should be false as almost 9.5 millions ballons are needed to lift up the house from Up!");

var lawnChairLarry = new Journey(lawnChair, 1, 45);
var stormAccident = new Journey(lawnChair, 1, 1000);
var lawnChairFlight = new Journey(lawnChair, 1, 18000);
assert.equal(lawnChairLarry.isPossible(), false, "should be false though first ever balloon flight in a lawn chair was performed by Larry Walters in 1982 with 45 balloons. However those were large wether ballons not the ordinary party balloons we use in our case");
assert.equal(stormAccident.isPossible(), false, "should be false though the real flight with 1000 party balloons (but much larger than the ones we use) was performed in 2008 by Adelir Antonio de Carli. He was caught in the strom and died in a crash in the Atlantic Ocean");
assert.equal(lawnChairFlight.isPossible(), true, "should be true since about 18000 regular sized party balloons are enough for one person lawn chair flight");
