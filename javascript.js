$( document ).ready(function() {
  console.log( "document loaded")

var board = $("[type='button']")

var click1 = "no selection"
var click2 = "no selection"
var firstclick = ""
var secondclick = ""
var clickcount = 0

function clicking(id, value){
  clickcount = clickcount += 1
    console.log("clickcount:" + clickcount)
  if (click1 === "no selection"){
    click1 = value
  }
  else if (firstclick != id){
    click2 = value
    //on second click, pushes click to click2 then checks if clicks match
    //no action if same item selected twice in a row (i.e can't match with yourself)
  }
  console.log("finished clicking; id:" + id + " value:" + value)
  comparing()
}

function comparing(){
  if (click2 != "no selection"){
    if (click1 === click2){
      console.log("yup")
      $(".evaluating").text(function(){
        return $(this).attr("name")
      }).removeClass("evaluating")
      //write to set record somewhere to visible
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
$(".board div").on("click", onclick)

function onclick(){
  var id = $(this).attr("id")
  var value = $(this).attr("value")
  $(this).addClass("evaluating")
  $(this).html($(this).attr("name"))
  console.log("clicked ", id, value);
  clicking(id, value);
  setTimeout(function(){
    $(".evaluating").html("$").removeClass("evaluating")
  },2000)
}

//set timer


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
