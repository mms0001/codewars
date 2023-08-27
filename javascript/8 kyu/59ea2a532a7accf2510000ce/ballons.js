function Journey(object, crew, balloons) {
   this.object = object
   this.crew = crew
   this.balloons = balloons
}


Journey.prototype.isPossible = function() {
    return this.crew * 80 * 1000 + this.object.weight * 1000 < this.balloons * 4.8
}


module.exports =  { Journey }