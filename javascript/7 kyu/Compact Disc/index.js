const encodeCD  = n =>  {
   let number =  ("000000000" + n.toString(2)).substr(-8)
}


console.log(encodeCD(5))
