window.onload = "readyFunction"
currentDay = document.getElementById("currentDay")
var row = document.getElementById("row")
var hour = document.getElementsByClassName("hour")
currentTime = moment().format("H");


var update = function() {
    currentDay.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentTime;
};
setInterval(update, 1000);

var $array = [];
$('.textarea').each(function(){
    var  currentTime = moment().hours()
    var id = parseInt($(this).attr("id"));
    console.log("hi there", id)
        
    if (id < currentTime) {
        $(this).addClass("past")
    } else if (id > currentTime) {
        $(this).addClass("future")
    } else {
        $(this).addClass("present")
    }
});


$('.saveBtn').click(function(){

    var key = $(this).siblings('textarea').attr('id');
    console.log("key: " + key)
    var value = $(this).siblings('textarea').val();
    console.log("value: " + value)
  
    localStorage.setItem("key", JSON.stringify(value));
  });

  function init() {
    // var key = $(this).siblings('textarea').attr('id');
    // var value = $(this).siblings('textarea').val();
    var content = JSON.parse(localStorage.getItem(key));
    console.log("hithere", key)
}
$(document).ready(function() {
 init();
});



//   • Establish an on-click event listener
//   • When clicked, get the key/value you want to save (hour/text)
//   • Save this key/value to localStorage
//   • Write an init() function, that runs on page load
//   • In this init() function, get all key/value pairs from localStorage
//   • Apply them to the page



var oneBtn = document.getElementsByClassName("oneBtn")
var one = document.getElementById("one")
var oneContent = document.getElementsByName("oneContent")
one.innerText = moment('13:00','h A').format('h A');



var twoBtn = document.getElementById("twoBtn")
var two = document.getElementById("two")
two.innerText = moment('14:00','h A').format('h A');


var threeBtn = document.getElementById("threeBtn")
var three = document.getElementById("three")
three.innerText = moment('15:00','h A').format('h A');


var fourBtn = document.getElementById("fourBtn")
var four = document.getElementById("four")
four.innerText = moment('16:00','h A').format('h A');

var fiveBtn = document.getElementById("fiveBtn")
var five = document.getElementById("five")
five.innerText = moment('17:00','h A').format('h A');

var sixBtn = document.getElementById("sixBtn")
var six = document.getElementById("six")
six.innerText = moment('18:00','h A').format('h A');


var sevenBtn = document.getElementById("sevenBtn")
var seven = document.getElementById("seven")
seven.innerText = moment('19:00','h A').format('h A');


var eightBtn = document.getElementById("eightBtn")
var eight = document.getElementById("eight")
eight.innerText = moment('20:00','h A').format('h A');


var nineBtn = document.getElementById("nineBtn")
var nine = document.getElementById("nine")
nine.innerText = moment('09:00','h A').format('h A');

var tenBtn = document.getElementById("tenBtn")
var ten = document.getElementById("ten")
ten.innerText = moment('10:00','h A').format('h A');

var elevenBtn = document.getElementById("elevenBtn")
var eleven = document.getElementById("eleven")
eleven.innerText = moment('11:00','h A').format('h A');

var twelveBtn = document.getElementById("twelveBtn")
var twelve = document.getElementById("twelve")
twelve.innerText = moment('12:00','h A').format('h A');



