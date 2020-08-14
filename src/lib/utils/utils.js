Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

function addDays(startDate, days) {
    var currentDate = startDate.addDays(days);
    return currentDate;
}

function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    
    return Math.round(value * multiplier) / multiplier;
    
}

export { getDates , round, addDays};
