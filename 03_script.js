let random = parseInt(Math.random()*100+1);
const button = document.querySelector('#submit');
const input = document.querySelector('.guessField');
const prev = document.querySelector('.guesses');
const rem = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 0;
let playGame = true;

if(playGame){
    button.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(input.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid number');
   }else if(guess<1) {
    alert('Please enter a number greater than 1');
   } else if(guess>100){
    alert('Please enter a number less than 100');
   } else {
    if(numGuess===11) {
        displayGuess(guess);
        displayMessage('Game over. Random number was '+random);
        endGame();
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
   }
}

function checkGuess(guess){
    if(guess===random){
        displayMessage('You guessed it right, number is ' + guess);
        endGame();
    } else if(guess<random){
        displayMessage('Number is tooo low');
    }else {
        displayMessage('Number is tooo high');
    }
}

function displayGuess(guess){
   input.value = '';
   prev.innerHTML += guess + ', ';
   numGuess++;
   rem.innerHTML = 10-numGuess;
}

function displayMessage(message){
lowOrHi.innerHTML = '<h2>' + message + '</h2>';
}

function endGame(){
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      random = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 0;
      prev.innerHTML = '';
      rem.innerHTML = 10 - numGuess;
      input.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}