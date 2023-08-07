const { scoreboard } = require('./scoreboard')
const assert = require('assert');


var whoAteWhat = [
    {name: "Billy The Beast", chickenwings: 17 , hamburgers: 7, hotdogs: 8},
    {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
    {name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},
    {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
  ];
  
  result = [
    {name: "Big Bob", score: 134},
    {name: "Billy The Beast", score: 122},
    {name: "Habanero Hillary", score: 98},
    {name: "Joey Jaws", score: 94}
  ]


assert.equal(scoreboard([{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}]), [{name: "Big Bob", score: 134}]);
//assert.equal(scoreboard([{name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15},{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}]), [{name: "Big Bob", score: 134},{name: "Joey Jaws", score: 94}]);
//assert.equal(scoreboard([{name: "Joey Jaws", chickenwings: 0, hamburgers: 1, hotdogs: 1},{name: "Big Bob" , chickenwings: 1, hamburgers: 0, hotdogs: 0}]), [{name: "Big Bob", score: 5},{name: "Joey Jaws", score: 5}]);
//assert.equal(scoreboard([]), []);
