const roundTo =  (number, precision) =>  {
    return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}


module.exports = { roundTo }



