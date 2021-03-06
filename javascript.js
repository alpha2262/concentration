$( document ).ready(function() {
  console.log( "document loaded")

var ns = "no selection"
var click1 = ns
var click2 = ns
var firstclick = ""
var clickcount = 0
var matches = 0

$(".board div").on("click", onclick);

function onclick(){

  var id = $(this).attr("id")
  var name = $(this).attr("data-myvar")
  $(this).addClass("evaluating")
  $(this).html($(this).attr("data-myvar"))
  clicking(id, name);
  setTimeout(function(){
    $(".evaluating").html("?").removeClass("evaluating");
    click1 = ns;
  },2000)
}

function clicking(id, name){
  clickcount++
  $("#clickcount").text("Number of tries: " + clickcount)

  if (click1 === ns){
    click1 = name
    firstclick = id
  }
  else if (firstclick != id){
    click2 = name
    //on second click, pushes click to click2 then checks if clicks match
    //no action if same item selected twice in a row (i.e can't match with yourself)
  }
  comparing()
}

function comparing(){
  if (click2 != ns){
    if (click1 === click2){
      console.log("yup")
      $(".evaluating").text(function(){
        return $(this).attr("[data-myvar]")
      }).removeClass("evaluating").addClass("matching")

      matches++
      $("#matches").text("Number of matches: " + matches)
      if (matches === 8){
        clearInterval(timerId)
        $("#play").html("Congrats!")
      }
    }
    else
    click1 = ns
    click2 = ns
    console.log("finished compare")
  }
}

//timer functions below
//how to get the timer html to continuously display updates per second?
$(".board").on("click", time);
$("#pause").on("click", pauseCheck);

var timenow = 0   //in aggregate seconds
var timeInSeconds = 0
var timeInMinutes = 0
var timerIsAlreadyRunning = false
var timerId;
var timerPause = true

function time(){
  if (timerIsAlreadyRunning === false){
    timerIsAlreadyRunning = true
    timerId = setInterval(incrementSeconds, 1000)
    timerPause = false
    $("#play").html("Good luck!")
    $("#pause").html("Pause")
  }
}

function pauseCheck(){
  if (timerPause === false){
    clearInterval(timerId)
    timerIsAlreadyRunning = false
    timerPause = true
    $("#pause").html("Unpause")
  }
  else if (timerPause === true){
    time()
  }
}

function incrementSeconds () {
  timenow++
  timeInMinutes = Math.floor(timenow/60)
  timeInSeconds = timenow % 60
  minutesDisplay = ""
  if (timeInMinutes >= 2) {
    minutesDisplay = timeInMinutes + " Minutes, "
  }
  else if (timeInMinutes >= 1 ) {
   minutesDisplay = timeInMinutes + " Minute, "
  }
   $("#timer").html("Timer: " + minutesDisplay + timeInSeconds + " seconds")
}

});
