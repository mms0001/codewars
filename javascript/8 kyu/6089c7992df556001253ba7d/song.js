class Song {
    #title
    #artist
    #people = new Set([])
    #size = 0

    constructor(title, artist) {
        this.#title = title
        this.#artist = artist
    }

    get title(){
        return this.#title
    }

    get artist(){
        return this.#artist
    }

    howMany(peoples) {
        let prv = this.#size;
        peoples.forEach(people => {
            this.#people.add(people.toLowerCase())
        });

        this.#size = this.#people.size
       
        return this.#people.size - prv 
    }
}



module.exports = { Song }