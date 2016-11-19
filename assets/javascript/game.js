
var options = ["batman", "superman", "robin", "wonderwoman", "flash", "arrow"]
var wins = 0;
var guesses = [];
var guessesLeft = 0;
var splitWord = [];
var midWord = []
var foundWord = []

var display = document.querySelector("#main");
var randomWord;

function decideSuperhero() {

    randomWord = options[Math.floor(Math.random()*options.length)];

            if (guessesLeft == 0) {
                    guessesLeft = 10;
                    guesses = [];
            }
            splitWord = randomWord.split("");
            console.log(splitWord)
            for (var i=0;i<splitWord.length;i++) {
                midWord[i] = '_';
                foundWord[i] = false;
            }

            console.log(randomWord);
            console.log(midWord)
}

    


document.onkeyup = function(event){
    
    var key = event.key;  
    console.log("key chosen", key);

    var match = false;
    //spacebar is keycode 32
    if(event.which == 32){
        decideSuperhero();
    } 
    else {
        for (i=0;i<splitWord.length;i++) {
            
            if (splitWord[i] == key) {
                if (foundWord[i] == false) {

                foundWord[i] = true;
                midWord[i] = key;
                wins++;         
                match = true;
            }
            }
        
                }
   if (match == false)
            guessesLeft--;  

    }
    
        

        if (guessesLeft == 0) {
            decideSuperhero();
        }
    
     
            var display = document.querySelector("#main")
            var text = document.querySelector("#secret-word");
            text = '<p> Wins: ' + wins + '</p>';
            text +='<p> Current Word: <br>';
            text += midWord;
            text += '</p>';
            text +='<p> Number of guesses left: ' + guessesLeft + '</p>';
            text += '<p>Your guesses so far: ' + guesses + '</p>';
            display.innerHTML = text;
    

    // push the letter chosen (key) into the guesses array
    // compare the letter chosen with the letters in the randomWord
    // display the correct letter on the page in the correct position
    // count wins
    // call decideSuperhero(); when you win to reset randomWord
    // when game resets, you will need to reset the variables (e.g. guesses, gussesLeft etc)
}
