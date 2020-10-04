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

var oneBtn = document.getElementById("oneBtn")
var one = document.getElementById("one")
var oneContent = document.getElementsByName("oneContent")
one.innerText = moment('13:00','h A').format('h A');
$(oneBtn).click(function(){
        var description = $.trim($("#13").val());
        localStorage.getItem(description)
        localStorage.setItem("#13", description)
});


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

// var currentDay = document.getElementById("currentDay")
// var currentTime = parseInt(moment().format('HH'));
// var hour = document.getElementsByClassName("hour")
// var row = document.getElementById("row")
// var textBox = document.getElementById("event")


