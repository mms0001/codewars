class Class {
  
    static #count = 0.5;
  
    static getNumber() {
        return this.#count *= 2;
    }
}
  
module.exports = { Class }
