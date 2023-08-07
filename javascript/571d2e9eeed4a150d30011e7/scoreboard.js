let foods = {
    chickenwings: 5,
    hamburgers: 3,
    hotdogs: 2 
}

const scoreboard = participants => {
    let result = []
    participants.forEach(participant => {
        let s = 0
        Object.getOwnPropertyNames(participant).filter(e => e !== 'name').forEach(element => {
             s += participant[element] * foods[element]
        });

        result.push({
            name: participant.name,
            score: s
        })
    });

    return result.sort((a, b) =>  b.score - a.score)
}
console.log(scoreboard([{name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}]))

module.exports = { scoreboard }
