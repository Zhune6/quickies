var wins = 0;
var ties = 0;
var losses = 0;
var poderosos = 0;

//this is to test showing the result of the function on the displayer
var a = 4
var b = 5
function displaytest(some) {
  document.getElementById("displaytest").innerHTML = some;
  displaytest(a + b)
}
function display (some) {
  document.getElementById("displaytest").innerHTML = some;
  display("test, hello");
}
//display()

//add the display functions for the game conditions (outcomes)
function displayties () {
  document.getElementById("ties").textContent = ties;
//  displayties(ties)
}
function displaywins () {
  document.getElementById("wins").textContent = wins;
//  displaywins(wins)
}
function displaylosses () {
  document.getElementById("losses").textContent = losses;
//  displaylosses(losses)
}

//test function call to see if it shows in the html displayer
//displaytest(a + b )


//document.querySelector("testing").textContent = "hello"
const selector =document.querySelector("options")
selector.addEventListener("change")

//document.querySelector("#wins").textContent = wins (moved to after you win)
// Array of options for computer to pick from
//var options = ["R", "P", "S", "Pito"];


var playGame = function() {
  // Ask user for their choice
  //make user choice come from selector
  var userchoice = document.
  //var userChoice = window.prompt("Enter R, P, or S:");
  //userChoice = userChoice.toUpperCase();
  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
  //if user input not rps display error
  //if (userChoice == options) {
      //window.alert("not an option")
    // playGame()
  //}

  // Convert to uppercase to make comparisons easier
  //userChoice = userChoice.toUpperCase();

  // Get random index from array of options
  var index = Math.floor(Math.random() * 3);
  var computerChoice = options[index];

  function pitodisplayer(some){
      document.getElementById("pitoaqui").innerHTML = some;
  }

  // If choices are the same, it's a tie
  if (userChoice === "PITO"){
    poderosos++;
    window.alert("ah el poderoso eh?");
    var Img = new Image ();
    pitodisplayer("el poderoso")
    Img.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";
    document.getElementById("pitoaqui").appendChild(Img)
    console.log("all good")
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties + "\npoderosos: " + poderosos
      );
      var playAgain = window.confirm("Play again?");
      if (playAgain) {
        playGame();
      }
}
window.alert("The computer chose " + computerChoice);
  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");
    

  // Check every win condition for the player
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!");
    
    

  // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert("You lost!");
   
  }

  //document.querySelector("ties").textContent = ties
  //document.querySelector("#wins").textContent = wins
  //document.querySelector("losses").textContent = losses
  // Print stats with line breaks
  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties + "\npoderosos: " + poderosos
  );
  displayties()
  displaywins()
  displaylosses()
  // Ask user to play again
  var playAgain = window.confirm("Play again?");

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();