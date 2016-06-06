$( document ).ready(function() {
  console.log( "document loaded")

var A = document.getElementById("a")
var B = document.getElementById("b")
var C = document.getElementById("c")
var D = document.getElementById("d")

var click1 = "no selection"
var click2 = "no selection"
var firstclick = ""  //firstclick should be the ID; prevent double selection
var clickcount = 0
var X = "a"

function clicking(){
  clickcount = clickcount += 1
    console.log("clickcount:" + clickcount)
  if (click1 === "no selection"){
    click1 = this.addEventListener("click", X)
    firstclick = this.addEventListener("click", X)
    console.log(click1)
  }
  else if (firstclick != this.addEventListener("click", X)){
    (click2 = this.addEventListener("click", X))
    //on second click, pushes click to click2 then checks if clicks match
    //no action if same item selected twice in a row (i.e can't match with yourself)

  if (click1 === click2){
    console.log("yup")
  }
  else console.log("nope")

  //after second match, resets clicked variables
  click1="no selection"
  click2="no selection"
  console.log(click1)
  }
};

//on click, the block displays
A.addEventListener("click", functionA)
B.addEventListener("click", functionB)
C.addEventListener("click", functionC)
D.addEventListener("click", functionD)


function functionA(){
  console.log("clicked A");
  clicking();
  // comparing();
}

  // check if class matches and switched to 'on's
    //on second click, second item displays
      //do first and second item match?
        //if yes, continue to display and update variable to show
        //if no, flip both first and second back to blank after 1 second
      //are all blocks visible?
        //if so, game ends
        //if not, restart matching function




function functionB(){
  console.log("clicked B")
  clicking("B")
}

function functionC(){
  console.log("clicked C")
  clicking("C")
}

function functionD(){
  console.log("clicked D")
  clicking("D")
}

// var $buttonIClickedOn = $(this)
//   console.log($buttonIClickedOn)


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
