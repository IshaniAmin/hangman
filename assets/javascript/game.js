

// User clicks spacebar to continue game
// User guesses letters
// computer checks to see if letter is in word
// if in word, then add to work
// if not in word, add to letters already guesses
// have limited number of guesses
// when correctly guessing word, add to # of wins

var options = ["batman"]
// var options = ["batman", "superman", "robin", "wonderwoman", "flash", "arrow"]
var wins = 0;
var guesses = [];
var guessesLeft = 10;

document.onkeyup = function(event){
        var key = event.key;
        

        var display = document.querySelector("#main");
        var randomWord = options[Math.floor(Math.random()*options.length)];
        console.log(randomWord);
        // for me to check if word is being logged



        function decideSuperhero () {
		var string = '<p>Guess a letter!</p>'
		string += '<p>Current Word: ';
                for (var k=0; k < randomWord.length ; k++ ) {
                        string +=  '_' ;
                }
                string += '</p>'
        	string += '<p>Guesses left: ' + guessesLeft + '</p>';
        	string += '<p>Letters guessed: </p>';
        	display.innerHTML = string; 
        }

        decideSuperhero()

}







