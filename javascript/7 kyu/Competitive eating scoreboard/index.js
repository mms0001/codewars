const scoreboard =  whoAteWhat => {
    let arr = [];
    
    whoAteWhat.map((x) =>  {
        let obj = {};
        obj.name = x.name
        obj.score =  x.chickenwings * 5 + x.hamburgers * 3 + x.hotdogs * 2
        arr.push(obj)
    })
    
    return arr.sort((a, b) => {
            if (a.score > b.score) return 1;
            if (a.score < b.score) return -1;

           
            return 0;
    })
}


let t = [{"name":"Pippi the cat","chickenwings":77,"hotdogs":43,"hamburgers":24},{"name":"GFortaine","chickenwings":54,"hotdogs":56,"hamburgers":75},{"name":"Pete Garvin","chickenwings":56,"hotdogs":75,"hamburgers":9},{"name":"Daymos","chickenwings":53,"hotdogs":83,"hamburgers":65},{"name":"Alex","chickenwings":33,"hotdogs":65,"hamburgers":55},{"name":"Laura - definitely not a beginner","chickenwings":14,"hotdogs":92,"hamburgers":44},{"name":"Gomes","chickenwings":60,"hotdogs":92,"hamburgers":18},{"name":"Giacomo Sorbet","chickenwings":14,"hotdogs":92,"hamburgers":44}]


console.log(scoreboard(t))
   