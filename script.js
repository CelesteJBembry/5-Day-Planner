//current date
var currentDate = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDate)
    console.log(currentDate);


//local storage
var storedData = JSON.parse(localStorage.getItem("storedData"));
console.log(storedData)

if (storedData !== null) {
  store = storedData;
} else {
  store= new Array(9);
  store [1] = "Time for Class";
}
console.log(store)
$('description').text(store)

//add user Input 
var test = null 
function description() {
var test=document.createElement("div")
var userInput = document.createElement("input");
userInput.setAttribute("type", "text");
userInput.setAttribute("value", "");
test.appendChild(userInput)
document.getElementById("description").appendChild(userInput);
}
//var userEvent = ("userInput")
//var $description = $('<input>');
//$description.attr('description');
//$description.val(store);
//$description.append(store)

//save user Input
//$(document).on('click','i', function(event) {event.preventDefault();}

//button
var saveBtn = saveBtn

for (var i = 0; i < saveBtn.length; i++) {
  var descriptionBtn = $("<button>");
  saveBtn.addClass("saveBtn");
  saveBtn.attr("data-letter", store[i]);
  saveBtn.text(store[i])
  $("#saveBtn").append(letterBtn);
}

//color 

var currentTime = moment().format('h:mm:ss a');
$('#currentTime').text(currentTime)
//define x

//function timeOfDayColor (currentTime) { }

//if (Time) [{
//if (currentTime<x);$row.css("past")}
//{else if (currentTime > x); $row.css("future");}
//{else (currentTime = x); $row.css("present");} }] 

