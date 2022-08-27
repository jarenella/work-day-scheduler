//displays the current date on the header
var currentDayEl = $("#currentDay");
var currentDay = moment().format('MMMM Do YYYY, h:mm a');
currentDayEl.text(currentDay);
var nineRow = $("#9");
var tenRow = $("#10");
var elevenRow = $("#11");
var twelveRow = $("#12");
var oneRow = $("#1");
var twoRow = $("#2");
var threeRow = $("#3");
var fourRow = $("#4");
var fiveRow = $("#5");
var message = $("#message");

//the current time which will be used to determine the color of the calendar rows
var currentTime = moment().format('h:mm a');

//compares the current time to the times on the calender to determine whch part of the calender is the present
//for 9-10 am
if (currentTime >= moment("1/23/92 09:00 am", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 10:00 am", "MM/DD/YY hh:mm a").format('h:mm a')) {
    $(nineRow).attr("class", "table-success");
    $("tbody").children("#10, #11, #12, #1, #2, #3, #4, #5").attr("class", "table-primary");
}
//for 10-11 am
if (currentTime >= moment("1/23/92 10:00 am", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 11:00 am", "MM/DD/YY hh:mm a").format('h:mm a')) {
    $("tbody").children("#9").attr("class", "table-secondary");
    $(tenRow).attr("class", "table-success");
    $("tbody").children("#11, #12, #1, #2, #3, #4, #5").attr("class", "table-primary");
}
//for 11 am - 12 pm
if (currentTime >= moment("01/23/92 11:00 am", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 12:00 pm", "MM/DD/YY hh:mm a").format('h:mm a')) {
    $("tbody").children("#9, #10").attr("class", "table-secondary");
    $(elevenRow).attr("class", "table-success");
    $("tbody").children("#12, #1, #2, #3, #4, #5").attr("class", "table-primary");
}
//for 12-1 pm
if (currentTime >= moment("01/23/92 12:00 pm", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 01:00 pm", "MM/DD/YY hh:mm a").format('h:mm a')) {
    $("tbody").children("#9, #10, #11").attr("class", "table-secondary");
    $(twelveRow).attr("class", "table-success");
    $("tbody").children("#1, #2, #3, #4, #5").attr("class", "table-primary");
}
//for 1-2 pm
if (currentTime >= moment("01/23/92 01:00 pm", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 02:00 pm", "MM/DD/YY hh:mm a").format('h:mm a')) {
    console.log("it's between 1-2 pm");
    $("tbody").children("#9, #10, #11, #12").attr("class", "table-secondary");
    $(oneRow).attr("class", "table-success");
    $("tbody").children("#2, #3, #4, #5").attr("class", "table-primary");
}
//for 2-3 pm
if (currentTime >= moment("01/23/92 02:00 pm", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 03:00 pm", "MM/DD/YY hh:mm a").format('h:mm a')) {
    console.log("it's between 2-3 pm");
    $("tbody").children("#9, #10, #11, #12, #1").attr("class", "table-secondary");
    $(twoRow).attr("class", "table-success");
    $("tbody").children("#3, #4, #5").attr("class", "table-primary");
}
//for 3-4 pm
if (currentTime >= moment("01/23/92 03:00 pm", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 04:00 pm", "MM/DD/YY hh:mm a").format('h:mm a')) {
    console.log("it's between 3-4 pm");
    $("tbody").children("#9, #10, #11, #12, #1, #2").attr("class", "table-secondary");
    $(threeRow).attr("class", "table-success");
    $("tbody").children("#4, #5").attr("class", "table-primary");
}
//for 4-5 pm
if (currentTime >= moment("01/23/92 04:00 pm", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 05:00 pm", "MM/DD/YY hh:mm a").format('h:mm a')) {
    console.log("it's between 4-5 pm");
    $("tbody").children("#9, #10, #11, #12, #1, #2, #3").attr("class", "table-secondary");
    $(fourRow).attr("class", "table-success");
    $("tbody").children("#5").attr("class", "table-primary");
}
//for 5-6 pm
if (currentTime >= moment("01/23/92 05:00 pm", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/23/92 06:00 pm", "MM/DD/YY hh:mm a").format('h:mm a')) {
    console.log("it's between 5-6 pm");
    $("tbody").children("#9, #10, #11, #12, #1, #2, #3, #4").attr("class", "table-secondary");
    $(fiveRow).attr("class", "table-success");
}
//for when it's not an hour of the 9-5 work day
if (currentTime >= moment("01/23/92 06:00 pm", "MM/DD/YY hh:mm a").format('h:mm a') && currentTime < moment("01/24/92 09:00 am", "MM/DD/YY hh:mm a").format('h:mm a')) {
    $("tbody").children().attr("class", "table-secondary");
}

//on click for the buttons so the user can save entered text to the local storage
$("button").on("click", function() {
    var thisButton = $(this).data('clicked', true);
    if(thisButton.parent().parent("#9").length != 0) {
        //this element exists! Aka the grandparent of the button clicked's ID = 9 ! (i cannot believe i figured this out lmao) Because the length of the id does not equal zero, that means it must exist
        console.log("test");
        localStorage.setItem("entry9", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
    else if(thisButton.parent().parent("#10").length != 0) {
        console.log("test");
        localStorage.setItem("entry10", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
    else if(thisButton.parent().parent("#11").length != 0) {
        console.log("test");
        localStorage.setItem("entry11", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
    else if(thisButton.parent().parent("#12").length != 0) {
        console.log("test");
        localStorage.setItem("entry12", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
    else if(thisButton.parent().parent("#1").length != 0) {
        console.log("test");
        localStorage.setItem("entry1", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
    else if(thisButton.parent().parent("#2").length != 0) {
        console.log("test");
        localStorage.setItem("entry2", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
    else if(thisButton.parent().parent("#3").length != 0) {
        console.log("test");
        localStorage.setItem("entry3", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
    else if(thisButton.parent().parent("#4").length != 0) {
        console.log("test");
        localStorage.setItem("entry4", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
    else if(thisButton.parent().parent("#5").length != 0) {
        console.log("test");
        localStorage.setItem("entry5", thisButton.parent().siblings("#event").children().val());
        message.text("Saved to the local storage. Refresh to see results.");
    }
})

//retrieving the entries from the console log and loading them to the page
var event9 = $("#9").children("#event").children();
event9.text(localStorage.getItem("entry9"));

var event9 = $("#10").children("#event").children();
event9.text(localStorage.getItem("entry10"));

var event9 = $("#11").children("#event").children();
event9.text(localStorage.getItem("entry11"));

var event9 = $("#12").children("#event").children();
event9.text(localStorage.getItem("entry12"));

var event9 = $("#1").children("#event").children();
event9.text(localStorage.getItem("entry1"));

var event9 = $("#2").children("#event").children();
event9.text(localStorage.getItem("entry2"));

var event9 = $("#3").children("#event").children();
event9.text(localStorage.getItem("entry3"));

var event9 = $("#4").children("#event").children();
event9.text(localStorage.getItem("entry4"));

var event9 = $("#5").children("#event").children();
event9.text(localStorage.getItem("entry5"));