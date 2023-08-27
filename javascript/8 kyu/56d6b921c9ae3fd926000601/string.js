String.prototype.toString = function() {
    try {
        console.log(this)
    } catch(err) {
        console.log('dd')
    }
 
}


(3).toString();