let POSSIBLE_WORDS= ["obdurate", "verisimilitude",
    "obsequious", "dissonant", "toady"];
let guesses = "";
let word="";
let MAX_GUESSES=6;
let guessCount = MAX_GUESSES;
function newGame(){
    guesses="";
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(
        Math.random()* POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    updateScreen();
}
function guess(){
    let input = document.getElementById("guess");
    let letter = input.value.toLowerCase();
    input.value = "";   // clear the input field on every guess
    if(word.indexOf(letter)<0){
        guessCount--;
    }
    guesses+=letter;
    updateScreen();
}
function updateScreen(){
    let clueString ="";
    for(let i = 0;i<word.length;i++){
        let letter = word.charAt(i);
        if(guesses.indexOf(letter) >=0){
            clueString+=letter+" ";
        }
        else{  clueString+="_ "; }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea =
    document.getElementById("guesses");
    guessArea.textContent =
    "Guessed Letters: "+guesses;

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;
}
