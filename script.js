 //Current Date
 let m = moment().format("dddd" + " Do" + " MMMM");
 var x = document.getElementById("date").textContent = (m)
 console.log(`${m.toString()}`);

 // take current time and apply to rows if in past wheat current red future green

 let t = moment().format("HH" + ":mm" + ":ss");
 console.log(`${t.toString()}`);

 var twelvePm = document.querySelector("#TwelvePm");
let time = moment().format("HH");
time = `${time.toString()}`;
console.log(`${time.toString()}`);
if (time === "09") {
    console.log("got here");
    $("#NineAm").addClass("present");
    $("#TenAm, #ElevenAm, #TwelvePm, #OnePm, #TwoPm, #ThreePm, #FourPm").addClass("future");
}
else if (time === "10") {
    console.log("got here");
 $("#TenAm").addClass("present");
 $("#NineAm").addClass("past");
 $("#ElevenAm, #TwelvePm, #OnePm, #TwoPm, #ThreePm, #FourPm").addClass("future");
}
else if (time === "11") {
    console.log("got here");
 $("#ElevenAm").addClass("present");
 $("#NineAm, #TenAm").addClass("past");
 $("#TwelvePm, #OnePm, #TwoPm, #ThreePm, #FourPm").addClass("future");
}
else if (time === "12") {
    console.log("got here");
 $("#TwelvePm").addClass("present");
 $("#NineAm, #TenAm, #ElevenAm").addClass("past");
 $("#OnePm, #TwoPm, #ThreePm, #FourPm").addClass("future");
}
else if (time === "13") {
    console.log("got here");
 $("#OnePm").addClass("present");
 $("#NineAm, #TenAm, #ElevenAm, #TwelvePm").addClass("past");
 $("#TwoPm, #ThreePm, #FourPm").addClass("future");
}
else if (time === "14") {
    console.log("got here");
 $("#TwoPm").addClass("present");
 $("#NineAm, #TenAm, #ElevenAm, #TwelvePm, #OnePm,").addClass("past");
 $("#ThreePm, #FourPm").addClass("future");
}
else if (time === "15") {
    console.log("got here");
 $("#ThreePm").addClass("present");
 $("#NineAm, #TenAm, #ElevenAm, #TwelvePm, #OnePm, #TwoPm").addClass("past");
 $("#FourPm").addClass("future");
}
else if (time === "16") {
    console.log("got here");
 $("#FourPm").addClass("present");
 $("#NineAm, #TenAm, #ElevenAm, #TwelvePm, #OnePm, #TwoPm, #ThreePm").addClass("past");
}

window.onbeforeunload = function() {
    localStorage.getItem("value", $('.middle').val());
}

let DaysSchedule = [];

$(".saveButton").on("click", function(event) {
    event.preventDefault();  
    let key = $(this).parents("tr").children(".userInput").attr("id") 
    let value = $(this).parents("tr").children(".userInput").children(".middle").val(); 
    let userData = {key: value}
    console.log (userData);  
    DaysSchedule.push(userData); 
    localStorage.setItem(key, value);
});

// let userData_returned = JSON.parse(localStorage.getItem("userData"));

