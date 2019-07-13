//Establish Word Choices
const choices = ["court", "steal", "teams", "layup", "block", "dunk"];

//setting up base let statements
let randNumber = Math.floor(Math.random() * choices.length);
let chosenWord = choices[randNumber];
let rightGuesses = [];
let wrongGuesses = [];
let underscore = [];
let underscoreJoined = [];
let guessesRemain = 10;
let wins = 0;
let losses = 0;

console.log(chosenWord);
console.log(guessesRemain);

//DOM manipulation
$('.winResult').append(wins);
$('.lossResult').append(losses);
$('.guessRemain').append(guessesRemain);
$('.wrongWord').append(wrongGuesses);

if (guessesRemain === 0) {
    alert('You Lose');
};

//generate underscores
let genUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}
console.log(genUnderscore());

//allow player to enter guesses and determine if correct or not
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    console.log(chosenWord.indexOf(keyword));
    if (chosenWord.indexOf(keyword) > -1) {
        console.log(true);
        $('#answers').append(keyword);
        console.log('rightGuesses ' + rightGuesses);
    }
    else {

        $('.wrongWord').append(keyword);
        console.log('wrongGuesses ' + wrongGuesses);
        guessesRemain--;
        $('.guessRemain').text(guessesRemain);
        //if guesses depleted, alert loss, increment losses and reset game
        if (guessesRemain === 0) {
            alert('You Lose');
            losses++;
            window.location.reload(randNumber);
            let guessesRemain = 10;
            let wrongGuesses = [];
        };
    }
    underscore[chosenWord.indexOf(keyword)] = keyword;
    console.log('underscore ' + underscore);
})

let underscoreJoin = underscore.join(' ');
console.log(underscoreJoin);
underscoreJoined.push(underscoreJoin);

//removing commas in array and displaying in DOM
function changeAnswers() {
    let answers = document.getElementById('answers');
    answers.innerHTML = underscoreJoin;
};
window.onload = changeAnswers;
$('#answers').append(changeAnswers);

let underscoreString = rightGuesses.toString();

console.log('underscoreString ' + underscoreString);
//Win Alert
if (underscoreString === chosenWord) {
    alert('YOU WIN!');
    wins++;
};


// button tto generate new game
function refreshPage() {
    window.location.reload(randNumber);
    let guessesRemain = 10;
    let wrongGuesses = [];
};