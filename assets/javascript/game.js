
var hangmanGame = {


  wordsToPick: {
    "batman" : {
      picture: "batman-logo.jpg"
    },
    "superman" : {
      picture: "superman.jpg"
    },
    "robin" : {
      picture: "robin.jpg"
    },
    "wonderwoman" : {
      picture: "wonderwoman.jpg"
    },
    "flash" : {
      picture: "flash.jpg"
    },
    "arrow" : {
      picture: "arrow.jpg"
    }
  },

  wordInPlay: null,
  lettersOfTheWord: [],
  matchedLetters: [],
  guessedLetters: [],
  guessesLeft: 0,
  totalGuesses: 0,
  letterGuessed: null,
  wins: 0,

  setupGame: function() {
    
    var objKeys = Object.keys(this.wordsToPick);
    this.wordInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

    
    this.lettersOfTheWord = this.wordInPlay.split("");
    
    this.rebuildWordView();

    this.processUpdateTotalGuesses();
  },


  updatePage: function(letter) {
    
    if (this.guessesLeft === 0) {
      this.restartGame();
    }

    else {
      
      this.updateGuesses(letter);

      this.updateMatchedLetters(letter);

      this.rebuildWordView();

      if (this.updateWins() === true) {
        this.restartGame();
      }
    }

  },


  updateGuesses: function(letter) {
    
    if ((this.guessedLetters.indexOf(letter) === -1) && (this.lettersOfTheWord.indexOf(letter) === -1)) {

      this.guessedLetters.push(letter);

      this.guessesLeft--;

      document.querySelector("#guessLeft").innerHTML = "Guesses left: " + this.guessesLeft;
      document.querySelector("#letters-guessed").innerHTML = "Letters guessed: " + this.guessedLetters.join(", ");
    }
  },

  processUpdateTotalGuesses: function() {
    
    this.totalGuesses = this.lettersOfTheWord.length + 5;
    this.guessesLeft = this.totalGuesses;

    
    document.querySelector("#guessLeft").innerHTML = this.guessesLeft;
  },

  
  updateMatchedLetters: function(letter) {
    
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      
      if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
        
        this.matchedLetters.push(letter);
      }
    }
  },


  rebuildWordView: function() {
    
    var wordView = "";

    
    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      
      if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
        wordView += this.lettersOfTheWord[i];
      }
      
      else {
        wordView += "&nbsp;_&nbsp;";
      }
    }

    
    document.querySelector("#secret-word").innerHTML = wordView;
  },

  
  restartGame: function() {
    document.querySelector("#letters-guessed").innerHTML = "";
    this.wordInPlay = null;
    this.lettersOfTheWord = [];
    this.matchedLetters = [];
    this.guessedLetters = [];
    this.guessesLeft = 0;
    this.totalGuesses = 0;
    this.letterGuessed = null;
    this.setupGame();
    this.rebuildWordView();
  },

  
  updateWins: function() {


    if (this.matchedLetters.length === 0) {
      var win = false;
    }
    
    else {
      var win = true;
    }

    for (var i = 0; i < this.lettersOfTheWord.length; i++) {
      if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) === -1) {
        win = false;
      }
    }

    
    if (win === true) {


      this.wins = this.wins + 1;


      document.querySelector("#wins").innerHTML = "Wins: " + this.wins;


      // document.querySelector("#picture").innerHTML = "<img id='heroPicture' class='heroImage' src='assets/images/" + this.wordsToPick[this.wordInPlay].picture + "' alt='" + this.wordsToPick[this.wordInPlay].song + "'>";

      return true;
    }
    
    else {
      return false;
    }
  }
};


hangmanGame.setupGame();


document.onkeyup = function(event) {
  
  hangmanGame.letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  
  hangmanGame.updatePage(hangmanGame.letterGuessed);
};
