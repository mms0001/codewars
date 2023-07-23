class Cuboid {

    #height
    #width
    #length

    constructor(length, width, height) {
         this.#length = length
         this.#width = width
         this.#height = height
    }
    
    get length() {
        return this.#length;
    }
 
    get width() {
        return this.#width;
    }
 
    get height() {
        return this.#height;
    }
 
    get surfaceArea() {
        return this.#height * this.#width * 2  + this.#width * this.length * 2 + this.#height * this.length *2
    }
 
    get volume() {
       return  this.#height * this.#width * this.#length
    }
 }
 
 class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length)
    }
 }

 
 module.exports = {Cube, Cuboid}