function makeClass(...properties) {

    const obj = { name: null, species: null ,age: null ,health: null ,weight: null ,color: null };
    return Object.assign(obj, properties);
}

const Animal = makeClass("name", "species", "age", "health", "weight", "color")
console.log(Animal);