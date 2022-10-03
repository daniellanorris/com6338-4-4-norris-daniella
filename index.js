var words = [
    'bananas',
    'grapes',
    'carousel',
    'milkshake',
    'javascript',
    'limousine',
    'chocolate',
    'programming',
    'meatloaf',
    'ukulele',
    'mango'
  ]
  
  
  var incorrect
  var wins
  var losses 
  var remainingTries = 10
  var winsEl = wins
  var lossesEl = losses
  var previousEl = document.getElementById('previous-word')
  var incorrectEl = document.getElementById('incorrect-letters')
  var remainingEl = document.getElementById('remaining-guesses')
  var wordGuess = document.getElementById('words-to-guess')
  var correctArray = [];
  var incorrectArray = [];
  
  document.onkeyup = function(e) {
    var key = e.key.toLowerCase()
    console.log(e.key)
  
    var remainingLetters = wordGuess.length;
  
    while(remainingLetters > 0) {
      newArray.textContent = answerArray.join("");
      
      for(var j = 0; j < 10; j++) {
        if(wordGuess[j] === key) {
          newArray[j] = key;
  
          } else {
            incorrect++
            incorrectEl.textContent = key
            remaining--
            remainingEl.textContent = remaining
  
          }
          previousEl.textContent = previousEl
  
          scoreEl.textContent = Math.round(wins/ (wins+losses) * 100)
          
        }
  
      } 
      if (newArray === wordGuess) {
        wins++
      }
      losses++
  loadFunction()
    
  }
  
    window.onload = function loadFunction() {
        previousEl.textContent = ""
        incorrectEl.textContent = ""
        remainingEl.textContent = remainingTries

        var wordGuess = words[Math.floor(Math.random() * words.length)]; 

        var underScoreWord = wordGuess.replaceAll(' ', '_');
        wordGuess.textContent = underScoreWord;
        console.log(underScoreWord);

        }
        
  
    
      
      
  