// Variables pulled from HTML
currentDay = document.getElementById("currentDay")
var row = document.getElementById("row")
var hour = document.getElementsByClassName("hour")
currentTime = moment().format("H");

// Update current time by the second
var update = function() {
    currentDay.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentTime;
};
setInterval(update, 1000);

// Function to change the color based on past, present, or future time.
var $array = [];
$('.textarea').each(function(){
    var  currentTime = moment().hours()
    var id = parseInt($(this).attr("id").substr(1));
    console.log("hi there", id)
        
    if (id < currentTime) {
        $(this).addClass("past")
    } else if (id > currentTime) {
        $(this).addClass("future")
    } else {
        $(this).addClass("present")
    }
});

// Function to save to Local Storage on click.

$('.saveBtn').click(function(){

    var saveHour = $(this).siblings('textarea').attr('id');
    console.log("key: " + saveHour)
    var saveDescription = $(this).siblings('textarea').val();
    console.log("value: " + saveDescription);

    localStorage.setItem(saveHour, saveDescription);
  });


// Function to pull existing info from Local Storage on load.

function whenOpened() {
 for (var i=9; i < 21; i++) {
     var loadInfo = localStorage.getItem("_" + i)
     console.log(loadInfo)
    $("#_" + i).val(loadInfo)
    console.log("hithere" + 5)
 }
}
$(document).ready(function() {
 whenOpened();
});


// Hardcoded Elements for the "Hour" section
var one = document.getElementById("one")
one.innerText = moment('13:00','h A').format('h A');

var two = document.getElementById("two")
two.innerText = moment('14:00','h A').format('h A');

var three = document.getElementById("three")
three.innerText = moment('15:00','h A').format('h A');

var four = document.getElementById("four")
four.innerText = moment('16:00','h A').format('h A');

var five = document.getElementById("five")
five.innerText = moment('17:00','h A').format('h A');

var six = document.getElementById("six")
six.innerText = moment('18:00','h A').format('h A');

var seven = document.getElementById("seven")
seven.innerText = moment('19:00','h A').format('h A');

var eight = document.getElementById("eight")
eight.innerText = moment('20:00','h A').format('h A');

var nine = document.getElementById("nine")
nine.innerText = moment('09:00','h A').format('h A');

var ten = document.getElementById("ten")
ten.innerText = moment('10:00','h A').format('h A');

var eleven = document.getElementById("eleven")
eleven.innerText = moment('11:00','h A').format('h A');

var twelve = document.getElementById("twelve")
twelve.innerText = moment('12:00','h A').format('h A');



