

// User clicks spacebar to continue game
// User guesses letters
// computer checks to see if letter is in word
// if in word, then add to work
// if not in word, add to letters already guesses
// have limited number of guesses
// when correctly guessing word, add to # of wins


var options = ["batman", "superman", "robin", "aquaman", "flash", "arrow", "spiderman", "hulk", "thor", "wolverine", "daredevil"];
var wins = 0;
var guesses = [];

document.onkeyup = function(event){
        var key = event.key;

        var display = document.querySelector("#main");
        var randomWord = options[Math.floor(Math.random()*options.length)];
        console.log(randomWord);

        function decideSuperhero (spaces) {
			var string = '<p>Guess a letter!<p/>'
			string += '<p>Current Word: <p/>';
        	string += '<p>' + spaces + '<p/>';
        	string += '<p>Guesses left: <p/>';
        	string += '<p>Letters guessed: <p/>';
        	display.innerHTML = string;
		}
       
        if (key == " ") {

        	if (randomWord == "batman") {
        		decideSuperhero ("_ _ _ _ _ _");
        	}
        	else if (randomWord == "superman") {
        		decideSuperhero ("_ _ _ _ _ _ _ _");
        	}
        	else if (randomWord == "robin") {
        		decideSuperhero ("_ _ _ _ _");
        	}
        	else if (randomWord == "aquaman") {
        		decideSuperhero ("_ _ _ _ _ _ _");
        	}
        	else if (randomWord == "flash") {
        		decideSuperhero ("_ _ _ _ _");
        	}
        	else if (randomWord == "arrow") {
        		decideSuperhero ("_ _ _ _ _");
        	}
        	else if (randomWord == "spiderman") {
        		decideSuperhero ("_ _ _ _ _ _ _ _ _");
        	}
        	else if (randomWord == "hulk") {
        		decideSuperhero ("_ _ _ _");
        	}
        	else if (randomWord == "thor") {
        		decideSuperhero ("_ _ _ _");
        	}
        	else if (randomWord == "wolverine") {
        		decideSuperhero ("_ _ _ _ _ _ _ _ _");
        	}
        	else if (randomWord == "daredevil") {
        		decideSuperhero ("_ _ _ _ _ _ _ _ _");
        	}
        }
}





