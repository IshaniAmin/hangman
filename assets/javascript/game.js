
var options = ["batman"]
// var options = ["batman", "superman", "robin", "wonderwoman", "flash", "arrow"]
var wins = 0;
var guesses = [];
var guessesLeft = 11;

var display = document.querySelector("#main");
var randomWord;



function getStarted() {

    var text = document.querySelector("#secret-word");
    text.innerHTML = '';
    randomWord = options[Math.floor(Math.random()*options.length)];
    for (var k=0; k < randomWord.length ; k++ ) {
        text.innerHTML +=  '_' ;
    }
    console.log(randomWord); //checking what the random word is
}

function playGame (){
    var display = document.querySelector("#main")
            text = '<p> Wins: ' + wins + '</p>';
            text +='<p> Current Word: </p>';
            
            text +='<p> Number of guesses left: ' + guessesLeft + '</p>';
            text += '<p>Your guesses so far: ' + guesses + '</p>';
            if (guessesLeft == 0) {
                    guessesLeft = 11
                    guesses = [];
            }
            display.innerHTML = text;
}


document.onkeyup = function(event){
    
    var key = event.key;  
    console.log("key chosen", key);

    //spacebar is keycode 32
    if(event.which == 32){
        getStarted();

    }   

    if (randomWord) {
        var splitWord = [];
        splitWord = randomWord.split("");
            if (splitWord.indexOf(key) > -1) {
                playGame();
    
            } else if (splitWord.indexOf(key) == -1) {
                guessesLeft--;
                guesses.push(key);
                // console.log(guessesLeft); //checking how many guesses left
                // console.log(guesses); //checking which guesses were guesses
                playGame();
            }
    }





    // console.log(randomWord)

    // push the letter chosen (key) into the guesses array
    // compare the letter chosen with the letters in the randomWord
    // display the correct letter on the page in the correct position
    // count wins
    // call decideSuperhero(); when you win to reset randomWord
    // when game resets, you will need to reset the variables (e.g. guesses, gussesLeft etc)
}

