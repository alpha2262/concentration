$( document ).ready(function() {
  console.log( "document loaded")

var A = document.getElementById("a")
var B = document.getElementById("b")
var C = document.getElementById("c")
var D = document.getElementById("d")

var click1 = "no selection"
var click2 = "no selection"
var firstclick = "x"
var clickcount = 0

function clicking(g, i){
  clickcount = clickcount += 1
    console.log("clickcount:" + clickcount)
  if (click1 === "no selection"){
    click1 = i
  }
  else if (firstclick != g){
    click2 = i
    //on second click, pushes click to click2 then checks if clicks match
    //no action if same item selected twice in a row (i.e can't match with yourself)
  }
  console.log("finished clicking name:" + g + " id:" + i)
  comparing()
}

function comparing(){
  if (click2 != "no selection"){
    if (click1 === click2){
      console.log("yup")
      //write to stay visible
    }
    else if (click1 != click2){
      console.log("nope")
      //after second match, resets clicked variables
    }
    click1="no selection"
    click2="no selection"
    console.log("finished compare")
    }
};

//on click, the block displays
A.addEventListener("click", functionA)
B.addEventListener("click", functionB)
C.addEventListener("click", functionC)
D.addEventListener("click", functionD)


function functionA(){
  console.log("clicked A");
  //pull these values in using 'this' function?
  var name = "A"
  var id = "1"
  clicking(name, id);
}

function functionB(){
  console.log("clicked B")
  var name = "B"
  var id = "1"
  clicking(name, id);
}

function functionC(){
  console.log("clicked C")
  var name = "C"
  var id = "2"
  clicking(name, id);
}

function functionD(){
  console.log("clicked D")
  var name = "D"
  var id = "2"
  clicking(name, id);
}

// check if class matches and switched to 'on's
  //on second click, second item displays
    //do first and second item match?
      //if yes, continue to display and update variable to show
      //if no, flip both first and second back to blank after 1 second
    //are all blocks visible?
      //if so, game ends
      //if not, restart matching function

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
