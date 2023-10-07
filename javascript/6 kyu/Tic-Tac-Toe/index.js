

// returns index of move
const solveTTT = board => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let indices = [];
    for(let i=0; i < board.length; i++) {
        if (board[i] === "O") indices.push(i);
    }


    for(let i = 0; i < indices.length; i++) {
        switch (indices[i]) {
            case 0:
            case 2:
                arr = arr.filter(e => ![0,1,2].includes(e))
              break;
            case 3:
            case 5:
                arr = arr.filter(e => ![3,4,5].includes(e))
              break;
            case 6:
            case 8:
                arr = arr.filter(e => ![6,7,8].includes(e))
              break;
            case 1:
                arr = arr.filter(e => ![0, 1, 2, 4, 7].includes(e))
              break;
            case 4:
                arr = arr.filter(e => ![1, 4, 7, 3, 5].includes(e))
            break; 
            case 7:
                arr = arr.filter(e => ![1, 4, 7, 6, 8].includes(e))
            break; 
          }

    }
  
    console.log(arr);

}

var b = ['O', '', '', 'O', 'X', '', 'X', 'O', 'X'];
console.log(solveTTT(b.slice()));