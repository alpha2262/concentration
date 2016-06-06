$( document ).ready(function() {
  console.log( "document loaded")

var A = document.getElementById("A")
var B = document.getElementById("B")
var C = document.getElementById("C")
var D = document.getElementById("D")

var click1 = 1
var click2 = 2

A.addEventListener("click", functionA)
B.addEventListener("click", functionB)
C.addEventListener("click", functionC)
D.addEventListener("click", functionD)

function functionA(){
  console.log("clicked A")
  $("#a").text("hidden");
  $("#a .on").text("off");
  // check if class matches and switched to 'on's
}

function functionB(){
  console.log("clicked B")
}

function functionC(){
  console.log("clicked C")
}

function functionD(){
  console.log("clicked D")
}

var $buttonIClickedOn = $(this)
  console.log($buttonIClickedOn)


});

  //when user selects timer, the timer will start and icons become selectable

  //var for keeping track of what's displayed/not. class show on/off?


  //on click, the block displays
    //on second click, second item displays
      //do first and second item match?
        //if yes, continue to display and update variable to show
        //if no, flip both first and second back to blank after 1 second
      //are all blocks visible?
        //if so, game ends
        //if not, restart matching function

  //on end when all matching, stop timer, alert 'good job!'
  //prompt to reset game?
