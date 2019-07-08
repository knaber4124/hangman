//Create an array of words
const choices=["court","steal","teams","layup","dribble","pass","block","dunk"];

//Choose word randomly
let randNumber= Math.floor(Math.random() * choices.length);
let chosenWord= choices[randNumber];
let rightGuess=[];
let wrongGuess=[];
let underscore=[];

console.log(chosenWord);

//Create underscores based on length of word
let genUnderscore = () => {
    for(let i=0; i < chosenWord.length; i++){
        underscore.push('_');
        
    }
    return underscore;
}
console.log(genUnderscore());

document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    console.log(chosenWord.indexOf(keyword));
    if(chosenWord.indexOf(keyword)>-1 ){
        console.log(true);
    }
})
        
    

    


//User guesses letter


//If right, reveal letter in underscores

//If wrong, display in wrong guesses
