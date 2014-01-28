var randNum = Math.floor((Math.random()*99) +1);
// print random number to console for debugging
console.log(randNum);
var count = 0;
var guess;
//an array to keep track of previous guesses
var allGuesses = [];
while (randNum != guess){
 count++;
 guess = prompt("Pick a number between 1 and 100");
 if (validGuess())
 guessCheck();
 console.log("Previous Guesses:" + allGuesses);
}
// check the guess temperature
function guessCheck(){
var numDiff = Math.abs(randNum - guess);
if (numDiff === 0){
    youWin(); 
}
else if (numDiff < 3){ 
   alert("Woah! Careful you don't start a fire.");  
}
else if (numDiff < 6){ 
   alert("You are hot!");  
}
else if (numDiff < 11){
    alert("You are warm");
}
else if (numDiff < 21){
    alert("You are cold");
}
else if(numDiff > 20){
    alert("You are very cold");
}
 allGuesses.push(guess);
     guessHint();
}
//check that guess was a valid number
function validGuess(){
if (guess < 0 || guess > 100 || isNaN(guess) || guess === ""){
    alert("You must pick a real number between  0 and 100");
    return false;
}
return true;
}
// varying responses to winning guess
function youWin(){
    if (count===1){
        alert("Wow! you are a genius! It only took you " + count + " try");
    }
    else if( count < 4){
        alert("Congratulations, you did it in " + count + " attempts. That is pretty good");
    }
    else {
        alert("Good job. Completed in " + count + " tries");
    }
    newGame();
}
//function to give hints
function guessHint(){
    if (guess > randNum){
        alert("lower");
}    
    else if (guess < randNum){
        alert("higher");

    }
}
//code to start a new game
function newGame(){
    var r=confirm("Would you like to play again?");
    if (r===true){
  resetGame();
  }
    else {
  alert("Thanks for playing");
  }
}

