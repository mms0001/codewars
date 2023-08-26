// Fix the methods here

Math.ceil = function(x) {
    num = String(x).split('.')
    if(num.length === 1) return +x
    if (+num[0] > 0) return +num[0] + 1
    else return +num[0] - 1
}

Math.floor = function(x) {
    num = String(x).split('.')
    if(num.length === 1) return +x
    if (+num[0] > 0) return +num[0];
    else return +num[0] - 1
}


Math.round = function(x) {
    num = String(x).split('.')
    if(num.length === 1) return +x
    if (+num[1][0] >= 5) return +num[0] + 1
    else return +num[0]
}


Math.abs = function(x) {
    if (x <= 0) return x * -1
    return x;
}

Math.max = function(...args) {
    let max = args[0];
    for(let i = 0; i <= args.length; i++) {
       if (max < args[i]) max = args[i]
    } 

    return max
}

Math.min = function(...args) {
    let min = args[0];
    for(let i = 0; i <= args.length; i++) {
       if (min > args[i]) min = args[i]
    } 

    return min
}

Math.pow = function(x, y) {
    let r = y === 0 ? 1 : x 
    for(let i = 1; i < y; i++) r *= x
    return r
}
