class Cube {
 
    constructor(length) {
        Object.assign(this, { length })
    }

    get surfaceArea() {
        return 6 * Math.pow(this.length, 2)
    }

    set surfaceArea (sa) {
        this.length = Math.sqrt(sa / 6)
    }

    get volume() {
        return Math.pow(this.length, 3)
    }

    set volume(v) {
        this.length = Math.cbrt(v)
    }
}

module.exports = { Cube }