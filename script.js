var randNum = Math.floor(Math.random()*101);
// print random number to console for testing
console.log(randNum);
var count = 0;
var guess;

var numDiff;

//track previous guesses
var allGuesses = [];

while (randNum != guess){
 count++;
 guess = prompt("Pick a number between 1 and 100");
 var numDiff = Math.abs(randNum - guess);
 allGuesses.push(guess);
 console.log("Previous Guesses:" + allGuesses);
if (guess < 1 || guess > 100 || isNaN(guess)){
    alert("You must pick a real number that is more than 0 and less than 101");
}
else if (numDiff === 0){
    alert("Congratulations! you guessed it in " + count + " attempt(s)");
}
else if (numDiff < 6){ 
   alert("You are hot!");  
}
else if (numDiff < 11 && numDiff > 5){
    alert("You are warm");
}
else if (numDiff < 21 && numDiff > 10){
    alert("You are cold");
}
else if(numDiff > 20){
    alert("You are very cold");
}
else
    alert("Are you sure you know how to play this game?");
}
