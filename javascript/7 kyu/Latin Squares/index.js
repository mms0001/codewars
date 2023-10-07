const makeLatinSquare = (n) => {
    let arr1 = arr2 = [];
    
    for(let j = 1 ; j <= n; j++) {
        arr1 = [];
        for(let i = 1 ; i <= n; i++) {
            arr1.push(i)
        }
        arr2.push(arr1);
    }

    return arr2
}

console.log(makeLatinSquare(4))