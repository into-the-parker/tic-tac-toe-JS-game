
let minutes = 25;
let seconds = 59;
let breakD = 5;
let moreMinutes = 24;
let moreBreak = 4;

$('#down').click( function (){
  minutes--;
  moreMinutes--;
  $(`#sessionT`).empty();
  $(`#sessionT`).append(
     `<p id="sessionT">${minutes}</p>`);
  $(`#timer`).empty();
  $(`#timer`).append(minutes) 
});

$('#up').click(function (){
  minutes++;
  moreMinutes++;
  $(`#sessionT`).empty();
  $(`#sessionT`).append(
     `<p id="sessionT">${minutes}</p>`);
  $(`#timer`).empty();
  $(`#timer`).append(minutes)  
});


$('#downS').click( function (){
  breakD--;
  moreBreak--;
  $(`#sessionS`).empty();
  $(`#sessionS`).append(
     `<p id="sessionS">${breakD}</p>`);
});

$('#upS').click(function (){
  breakD++;
  moreBreak++;
  $(`#sessionS`).empty();
  $(`#sessionS`).append(
     `<p id="sessionS">${breakD}</p>`);
});
  
 $(`#countDown`).one('click',function (){
   
   $(`#countDown`).addClass("blinkdiv");
   
   minutes--;
   
return myFunction();

});


var myVar;

function myFunction() {
    myVar = setInterval(duration, 1000);
}

function duration() {
  $(`#timer`).empty();
  $(`#timer`).append(minutes + ":" + seconds);
  if (minutes === 0 && seconds === 0){
  $(`#sessionD`).empty();
  $(`#sessionD`).append(`<P id="sessionD">Break Time</p>`);
  $(`#countDown`).removeClass("blinkdiv");
  $(`#countDown`).addClass("blinkdiv2");
    breakD = moreBreak;
    seconds = 59;
    return myStopFunction();
   } else if (minutes > 0 && seconds === 0){
         minutes--;
         seconds = 59;
       } else {
        seconds--;
      }
};

function myStopFunction() {
    clearInterval(myVar);
    return breakFunction();
}



var doVar;

function breakFunction() {
    doVar = setInterval(breakTime, 1000);
}


  function breakTime (){
   $(`#timer`).empty();
   $(`#timer`).append(breakD + ":" + seconds);
   if (breakD === 0 && seconds === 0){
   $('#sessionD').empty();
   $(`#sessionD`).append(`<P id="sessionD">Duration</p>`);
   $(`#countDown`).removeClass("blinkdiv2");
   $(`#countDown`).addClass("blinkdiv");
     minutes = moreMinutes;
     seconds = 59;
     return myBreakFunction();
    } else if (breakD > 0 && seconds === 0){
          breakD--;
          seconds = 59;
        } else {
         seconds--;
        }
  };


function myBreakFunction() {
    clearInterval(doVar);
    return myFunction();
}



 





