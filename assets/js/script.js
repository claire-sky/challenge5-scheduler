// function to save to local storage
$(".time-block").on("click", ".saveBtn", function() {
    var hour = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    // schedule[hour] = text
    // localStorage.setItem("schedule", JSON.stringify(schedule));
    localStorage.setItem(hour, text);
});

// function to load schedule from local storage on page load
var loadSchedule = function() {
    for (i = 8; i <= 17; i++) {
        $(".schedule" + i)[0].value = retrieveText("schedule" + i);
        console.log(retrieveText("schedule" + i));
    };
};

// function to retrieve local storage
var retrieveText = function(text) {
    if (!localStorage.getItem(text)) {
        return ""; 
    }
    return localStorage.getItem(text);
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
    for (i = 8; i <= 17; i++) {
        // remove any old classes from time blocks
        $(".schedule" + i).removeClass("past present future");
        
        // apply new class to time blocks
        // past time block
        if (currentHour > i) {
        $(".schedule" + i).addClass("past");
        // current time block
        } else if (currentHour == i) {
            $(".schedule" + i).addClass("present");
        //future time block
        } else {
            $(".schedule" + i).addClass("future");
        };
    };  
};

// time refresh every second
setInterval(function() {
    colorSchedule();
    updateTime();
}, 1000);

colorSchedule();
updateTime();
loadSchedule();