exports.lastSurvivor = (letters, coords)  => {

    coords.forEach(el => {
        p = letters.indexOf(letters[el])
        letters = letters.substring(0, p) +  letters.substring(p + 1, letters.length)
    });

    return  letters;
}

