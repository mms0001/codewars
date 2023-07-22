
Date.prototype.getDate = function getGrinchDate() {
    let [, month, day] = new Date(this).toISOString().slice(0, 10).split('-');
    return (month === '12' && day === '25') ? 26 : +day
}

module.exports = { Date }