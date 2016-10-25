//Scores
var wins = 0;
var losses = 0;

var counter = 0;

var targetNumber;


function clickhandler()
{
  console.log("click");
  // Determining the crystal's value requires us to extract the value from the data attribute.
  // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
  // Using the .data("crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
  // (It automatically strips the "data-" part).
  var crystalValue = ($(this).data("crystalvalue"));

  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;


  if (counter === targetNumber) 
  {
    wins++;
    document.getElementById('statusMsg').innerHTML = ("You win!");
    setup();
  }

  else if (counter >= targetNumber) 
  {
    losses++;
    document.getElementById('statusMsg').innerHTML = ("You lose!");
    setup();
  }

  
  //updates score on click
  document.getElementById('losses').innerHTML = losses;
  document.getElementById('wins').innerHTML = wins;
  document.getElementById('totalscore').innerHTML =  (counter);
}

function setup ()
{ 
  //set to zero on page load
  document.getElementById('losses').innerHTML = 0;
  document.getElementById('wins').innerHTML = 0;
  document.getElementById('totalscore').innerHTML =  (0);
  
  counter = 0;
  //Variable to hold number total to guess
  targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);

  $("#numberToGuess").text(targetNumber);
  


  // Create array for 4 crystals where each crystal has a random value between 1 and 12.
  var numberOptions = [];
  for (var i = 0, x = 12; i < 4; i++) 
  {
    numberOptions.push(Math.floor(Math.random() * x)+1)
  };

 $("#crystals").empty();
   
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) 
  {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystalImage".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystalImage");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/jewel" + (i+1)+ ".jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
    
  }

// The click event applies to every single crystal on the page. Not just one.
$(".crystalImage").on("click", clickhandler);

}

//Initialize the game when the window loads
window.onload = setup();