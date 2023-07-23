

function Counter(){
   this.c = 1;
}

Counter.prototype.incr = function() {
    return this.c += 1
}

Counter.prototype.valueOf = function() {
    return this.c
}


module.exports = { Counter }
