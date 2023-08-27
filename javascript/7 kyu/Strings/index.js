const toString =  Array.prototype.toString = Number.prototype.toString = Boolean.prototype.toString = function() {
    return JSON.stringify(this);
}


module.exports = { toString }