$(document).ready(function(){
var count = 1;
var allGuesses = []; //an array to keep track of previous guesses
var randNum = Math.floor((Math.random()*99) +1); 
  console.log(randNum); // prints random number to console for debugging 

  $("#endgame").click(function(){
    $(".footer").html("The answer is " + randNum);
    $('#alerts').html('');
    $('.header').html(" ");
    $('#previous').html(" ");
  });


  $('#submit').click(function(){
    var guess = $('#guess').val();     
    if (validGuess()){
    count++;
      allGuesses.push(guess);
      $('#previous').html("Previous guesses: " + allGuesses);
      $('#guess').val('');
      guessHint();
      guessCheck();}
      
  $('#guess').keypress(function(event){
    if(event.keyCode == 13) {
      $("#submit").click();
      return false;
    }
    });
     
  
function youWin(){ // varying responses to winning guess
    if (count===1){
        $('.header').html("Wow! you are a genius! It only took you " + count + " try");
    } else if( count < 4){
        $('.header').html("Congratulations, you did it in " + count + " attempts. That is pretty good");
    } else {
        $('.header').html("Good job. Completed in " + count + " tries");
    }
    $('#alerts').html(" ");

    }
  
 function guessCheck(){ // checks how far the guess is from the random number
  var numDiff = Math.abs(randNum - guess);
    if (numDiff === 0){
        youWin(); 
    } else if (numDiff < 3){ 
        $('#alerts').html("Woah! Careful you don't start a fire.");  
    } else if (numDiff < 6){ 
        $('#alerts').html("You are hot!");  
    } else if (numDiff < 11){
        $('#alerts').html("You are warm");
    } else if (numDiff < 21){
        $('#alerts').html("You are cold");
    } else if(numDiff > 20){
        $('#alerts').html("You are very cold");
    }
 }
    function validGuess(){ //checks that the guess was a valid number
    if (guess < 0 || guess > 100 || isNaN(guess) || guess === ""){
        $('.header').html("You must pick a real number between  0 and 100");
        return false;
    } return true;
    }
 function guessHint(){ //function to give hints
    if (guess > randNum){
      $('.header').html("Guess lower");
    } else if (guess < randNum){
      $('.header').html("Guess higher");
    }
    }
//end game
function endGame(){
  $('.footer').html("The answer is " + randNum);
} 

//reset game
    $('#newgame').click(function(){
count = 0;
allGuesses.length = 0;
randNum = Math.floor((Math.random()*99) +1); 
  console.log(randNum);
    $('#alerts').html('');
    $('.header').html("<p>I'm thinking of a number between 1 and 100. Can you guess what it is?</p>");
    $('#guess').val('');
  $('#previous').html(" ");
      $('.footer').html(" ");
  }
   
   );
  }); 
});
               
