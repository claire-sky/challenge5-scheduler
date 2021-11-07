var schedule = {};

// function to save to local storage
$(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    schedule.text = text;
    schedule.hour = hour;
    localStorage.setItem("schedule", JSON.stringify(schedule));
});

// function to retrieve and load schedule from local storage on page load
var loadSchedule = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));

    $.each(schedule, function(list, arr) {
        
    });
};

// header date
function updateTime() {
    var headerDay = moment().format('dddd, MMMM Do');
    $("#currentDay").empty().append(headerDay);
};

// schedule color
var colorSchedule = function() {
    // get current time
    var currentHour = moment().format("k");
    for (i = 8; i < 17; i++) {
        // remove any old classes from time blocks
        $(".schedule-" + i).removeClass("past present future");
        
        // apply new class to time blocks
        // past time block
        if (currentHour > i) {
        $(".schedule-" + i).addClass("past");
        // current time block
        } else if (currentHour == i) {
            $(".schedule-" + i).addClass("present");
        //future time block
        } else {
            $(".schedule-" + i).addClass("future");
        };
    };  
};

// time refresh every hour
setInterval(function() {
    updateTime();
}, 1000 * 60 * 60);

setInterval(function() {
    colorSchedule();
}, 1000);

updateTime();