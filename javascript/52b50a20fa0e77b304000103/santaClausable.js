const isSantaClausable = (santa) =>  {
    var propertyNames = Object.getOwnPropertyNames(santa).sort().filter((e) => { 
      if (typeof santa[e] == 'function') return true
    });
   
    return JSON.stringify(['distributeGifts', 'goDownTheChimney', 'sayHoHoHo']) === JSON.stringify(propertyNames) 
}


module.exports = { isSantaClausable }