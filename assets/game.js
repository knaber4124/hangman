//Establish Word Choices
const choices = ["court", "steal", "teams", "layup", "block", "dunk"];

//setting up base let statements
let randNumber = Math.floor(Math.random() * choices.length);
let chosenWord = choices[randNumber];
let rightGuesses = [];
let wrongGuesses = [];
let underscore = [];

console.log(chosenWord);

//generate underscores in console
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
        console.log(rightGuesses);
    }
    else {
        
        wrongGuess.push(keyword);
        console.log(wrongGuesses);
    }
    underscore[chosenWord.indexOf(keyword)] = keyword;
    console.log(underscore);

    

    
})
let underscoreJoin = underscore.join('');
// console.log(underscoreJoin);

function changeAnswers () {
    let answers = document.getElementById('answers');
    answers.innerHTML = underscoreJoin;
}
window.onload = changeAnswers;

//function answerWrong () {
  //  let wrongWord = document.getElementById('wrongWord');
  //  wrongWord.innerHTML = wrongGuesses;
//}
//window.onload = answerWrong;

//button functionality to restart game
function refreshPage() {
    window.location.reload();
}
[].join








