$( document ).ready(function() {
  console.log( "document loaded")

var click1 = "no selection"
var click2 = "no selection"
var firstclick = ""
var secondclick = ""
var clickcount = 0

function clicking(id, name){
  clickcount = clickcount += 1
    console.log("clickcount:" + clickcount)
    $("#clickcount").text("Number of tries: " + clickcount)

  if (click1 === "no selection"){
    click1 = name
  }
  else if (firstclick != id){
    click2 = name
    //on second click, pushes click to click2 then checks if clicks match
    //no action if same item selected twice in a row (i.e can't match with yourself)
  }
  console.log("finished clicking; id:" + id + " name:" + name)
  comparing()
}

function comparing(){
  if (click2 != "no selection"){
    if (click1 === click2){
      console.log("yup")
      $(".evaluating").text(function(){
        return $(this).attr("name")
      }).removeClass("evaluating")
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
$(".board div").on("click", onclick);

function onclick(){

  var id = $(this).attr("id")
  var name = $(this).attr("name")
  $(this).addClass("evaluating")
  $(this).html($(this).attr("name"))
  clicking(id, name);
  setTimeout(function(){
    $(".evaluating").html("$").removeClass("evaluating");
    click1 = "no selection";
  },2000)
}

});

//set timer
//if all squares complete, game ends

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
