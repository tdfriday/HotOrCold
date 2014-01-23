var count = 1;
var answer = Math.floor(Math.random()*101);
// this is to check the random number for testing purposes
console.log(answer);
var guess = prompt("Pick a number between 1 and 100");
if (guess < 1 || guess > 100 || isNaN(guess)){
    alert("You must pick a real number that is more than 0 and less than 101");
}
else if (guess == answer){
    alert("Congratulations! you guessed it!");
}
else{
    alert("Wrong!");
}