
function nextSequence(){
   var randomNumber = Math.floor(Math.random() *3 );
   return randomNumber;

}
var buttonColours = ["red", "blue", "green","yellow"];
var randomChosenColour = buttonColours[nextSequence()];
var gamePattern = [];
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).on("click", function (){
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);});
