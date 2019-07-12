//Establish Word Choices
const choices = ["court", "steal", "teams", "layup", "block", "dunk"];

//setting up base let statements
let randNumber = Math.floor(Math.random() * choices.length);
let chosenWord = choices[randNumber];
let rightGuesses = [];
let wrongGuesses = [];
let underscore = [];
let underscoreJoined=[];
let guessesRemain=10;
let wins=0;
let losses=0;

console.log(chosenWord);
console.log(guessesRemain);
//generate underscores
let genUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}
console.log(genUnderscore());

//allow player to enter guesses into log and determine if correct or not
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    console.log(chosenWord.indexOf(keyword));
    if (chosenWord.indexOf(keyword) > -1) {
        console.log(true);
        rightGuesses.push(keyword);
        console.log('rightGuesses '+rightGuesses);
    }
    else {

        wrongGuesses.push(keyword);
        console.log('wrongGuesses ' + wrongGuesses);
        guessesRemain--;
    }
    underscore[chosenWord.indexOf(keyword)] = keyword;
    console.log('underscore '+underscore);




})
let underscoreJoin = underscore.join(' ');
 console.log(underscoreJoin);
 underscoreJoined.push(underscoreJoin);


function changeAnswers() {
    let answers = document.getElementById('answers');
    answers.innerHTML = underscoreJoin;
};
window.onload = changeAnswers;

// use push on rightAnswer into underscoreJoin
// change button to rerun randNumber
// usejQuery append to change selected word guesses

//function answerWrong () {
//let wrongWord = document.getElementById('wrongWord');
//wrongWord.innerHTML = wrongGuesses;

//}
//window.onload = answerWrong;

//button functionality to restart game
let underscoreString= rightGuesses.toString();

console.log('underscoreString '+underscoreString);

if (underscoreString===chosenWord){
    alert('YOU WIN!');
};
if (guessesRemain===0){
    alert('You Lose');
};

function refreshPage() {
    window.location.reload(randNumber);
}









