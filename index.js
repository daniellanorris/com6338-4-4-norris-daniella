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
  var wins = 0
  var losses = 0
  var score = 0
  var remaining = 10
  var winsEl = document.getElementById('wins')
  var lossesEl = document.getElementById('losses')
  var previousEl = document.getElementById('previous-word')
  var incorrectEl = document.getElementById('incorrect-letters')
  var remainingEl = document.getElementById('remaining-guesses')
  var scoreEl = document.getElementById('score')
  var wordGuess = document.getElementById('word-to-guess')
  var key = e.key.toLowerCase()
  var startBtn = document.querySelector('.game button')
  var answerArray = [];
  
  document.onkeyup = function(e) {
    console.log(e.key)
    var wordGuess = words[Math.floor(Math.random() * words.length)];
    for(var i = 0; i < wordGuess.length; i++) {
      answerArray[i] = "_";
    }
  
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
      if(newArray === wordGuess) {
        wins++
      }
      losses++
  
    
  }
  
  startBtn.onclick = function() {
    previousEl.textContent = ""
    incorrectEl.textContent = ""
    scoreEl.textContent = ""
    wordGuess.textContent = ""
    winsEl.textContent = wins
    lossesEl.textContent = losses
    remainingEl.textContent = remaining
  
    }
      
      
  