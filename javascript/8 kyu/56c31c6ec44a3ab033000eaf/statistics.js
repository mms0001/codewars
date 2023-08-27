class DataSet {
   
    constructor(...data) {
      this.data = data
      this.setMean()
      this.setVar()
    }

    get mean() {
        return this._mean
    }

    setMean() {
        this._mean = this.data.reduce((a, b) => a + b, 0) / this.data.length
        return this._mean 
    }


    get variance() {
        return this._variance;
    }

    setVar() {
        this._variance  = this.data.map((x) => Math.pow(x - this.mean, 2)).reduce((a, b) => a + b, 0) / this.data.length
        return this._variance
    }

    get stdDeviation() {
        return Math.sqrt(this._variance)
    }

}

module.exports = { DataSet }
