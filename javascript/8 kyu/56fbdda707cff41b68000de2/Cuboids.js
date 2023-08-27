class Cuboid {

    constructor(length, width, height) {
         Object.assign(this, { length, width, height })
    }
 
    get surfaceArea() {
        return 2 * (this.height * this.width + this.width * this.length + this.height * this.length)
    }
 
    get volume() {
       return this.height * this.width * this.length
    }
 }
 
 class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length)
    }
 }

 
 module.exports = {Cube, Cuboid}