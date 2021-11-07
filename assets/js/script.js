// header date
function updateTime() {
    var headerDay = moment().format('dddd, MMMM Do');
    $("#currentDay").append(headerDay);
};

// time refresh every 30 minutes
setInterval(function() {
    updateTime();
}, 1000 * 6 * 30);