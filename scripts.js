window.onload = "readyFunction"
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDay = document.getElementById("currentDay")
var row = document.getElementById("row")
var hour = document.getElementsByClassName("hour")
var update = function() {
    currentDay.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentTime = moment().format('LT');
    console.log("hi there", + currentTime);

    if (hour < currentTime) {
        $(hour).addClass("past");
    }
    if (hour > currentTime) {
        $(hour).addClass("future");
    }
    if (hour = currentTime) {
        $(hour).addClass("present");
    }
}
setInterval(update, 1000);

// $(document).ready(function() {
    
// }

// $(document).ready(function() {
//     setInterval(update, 1000);
// }
//     if (hour=currentTime) {
//         $(".hour").addClass("present")
//     } else if (hour<currentTime) {
//         $(".hour").addClass("past")
//     } else {
//         $(".hour").addClass("future")
//     }

// });

var oneBtn = document.getElementById("oneBtn")
var oneText = document.getElementById("oneText")
var one = document.getElementById("one")
one.innerText = moment('13:00','h A').format('h A');


var twoBtn = document.getElementById("twoBtn")
var twoText = document.getElementById("twoText")
var two = document.getElementById("two")
two.innerText = moment('14:00','h A').format('h A');


var threeBtn = document.getElementById("threeBtn")
var threeText = document.getElementById("threeText")
var three = document.getElementById("three")
three.innerText = moment('15:00','h A').format('h A');


var fourBtn = document.getElementById("fourBtn")
var fourText = document.getElementById("fourText")
var four = document.getElementById("four")
four.innerText = moment('16:00','h A').format('h A');

var fiveBtn = document.getElementById("fiveBtn")
var fiveText = document.getElementById("fiveText")
var five = document.getElementById("five")
five.innerText = moment('17:00','h A').format('h A');



var sixBtn = document.getElementById("sixBtn")
var sixText = document.getElementById("sixText")
var six = document.getElementById("six")
six.innerText = moment('18:00','h A').format('h A');


var sevenBtn = document.getElementById("sevenBtn")
var sevenText = document.getElementById("sevenText")
var seven = document.getElementById("seven")
seven.innerText = moment('19:00','h A').format('h A');


var eightBtn = document.getElementById("eightBtn")
var eightText = document.getElementById("eightText")
var eight = document.getElementById("eight")
eight.innerText = moment('20:00','h A').format('h A');


var nineBtn = document.getElementById("nineBtn")
var nineText = document.getElementById("nineText")
var nine = document.getElementById("nine")
nine.innerText = moment('09:00','h A').format('h A');

var tenBtn = document.getElementById("tenBtn")
var tenText = document.getElementById("tenText")
var ten = document.getElementById("ten")
ten.innerText = moment('10:00','h A').format('h A');

var elevenBtn = document.getElementById("elevenBtn")
var elevenText = document.getElementById("elevenText")
var eleven = document.getElementById("eleven")
eleven.innerText = moment('11:00','h A').format('h A');

var twelveBtn = document.getElementById("twelveBtn")
var twelveText = document.getElementById("twelveText")
var twelve = document.getElementById("twelve")
twelve.innerText = moment('12:00','h A').format('h A');

// var currentDay = document.getElementById("currentDay")
// var currentTime = parseInt(moment().format('HH'));
// var hour = document.getElementsByClassName("hour")
// var row = document.getElementById("row")
// var textBox = document.getElementById("event")


