let cards; //               = document.querySelectorAll('.memory-card');
let leftPlayer = document.getElementById('leftPlayer');
let rightPlayer = document.getElementById('rightPlayer');
let leftPlayerUsername = document.getElementById('leftPlayerUsername');
let RightPlayerUsername = document.getElementById('RightPlayerUsername');

let leftPlayerScoreLBL = document.getElementById('leftPlayerScore');
let rightPlayerScoreLBL = document.getElementById('rightPlayerScore');

let leftPlayerScore = 0;
let rightPlayerScore = 0;


updateScore(leftPlayerScoreLBL, leftPlayerScore);
updateScore(rightPlayerScoreLBL, rightPlayerScore);


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let changeTurn = 0;
let pairsFoundedCount = 0;
let NUMBER_OF_PAIRS;
let boardSize;





function flipCard() {
  if (lockBoard) {
    return;
  }
  if (this.dataset.framework === `img${NUMBER_OF_PAIRS - 1}` && NUMBER_OF_PAIRS % 2 === 1 && firstCard === null) {
  rotateCard(this);
    firstCard = this;
    secondCard = this;
    checkForMatch();
    updateTurn();
    return;
  }
  if (this === firstCard) {
    rotateCard(this);
    return;
  }

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
  updateTurn();
}

function rotateCard(c) {
  c.classList.remove('flip');
  setTimeout(() => {
    c.classList.add('flip');
  }, 250);
}

function foundCard() {
  rotateCard(this);
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  if (isMatch) {
    disableCards();
    match();
  } else {
    unflipCards();
    changeTurn = (changeTurn + 1) % 2;

  }

}

function match() {
  pairsFoundedCount += 1;
  if (pairsFoundedCount === NUMBER_OF_PAIRS) {
    if (changeTurn === 0) {
      updateScore(leftPlayerScoreLBL, ++leftPlayerScore);
    } else {
      updateScore(rightPlayerScoreLBL, ++rightPlayerScore)
    }
    setTimeout(() => {
      startGame();
    }, 1000);
    
  }
}


function updateScore(playerScoreLabel, score) {
  playerScoreLabel.innerHTML = "Score: " + score;
}

function updateTurn() {
  if (changeTurn === 0) {
    switchPlayerColor(leftPlayer, true);
    switchPlayerColor(rightPlayer, false);
  } else {
    switchPlayerColor(leftPlayer, false);
    switchPlayerColor(rightPlayer, true);
  }
}

function switchPlayerColor(player, turn) {
  if (turn) {
    player.classList.remove('red');
    player.classList.add('green');
  } else {
    player.classList.remove('green');
    player.classList.add('red');
  }
}




function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  firstCard.addEventListener('click', foundCard);

  secondCard.removeEventListener('click', flipCard);
  secondCard.addEventListener('click', foundCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
};

function startGame() {
  let numOfCards = boardSize * boardSize;
  NUMBER_OF_PAIRS = Math.floor(numOfCards / 2 + numOfCards % 2);


  pairsFoundedCount = 0;


  cards = document.querySelectorAll('.memory-card');
  cards.forEach(card => {
    let cardSize;
    if (boardSize === 4) {
      cardSize = 'calc(25% - 10px)';
    } else {
      cardSize = 'calc(20% - 10px)';
    }
    card.style.width  = cardSize;
    card.style.height = cardSize;

    card.removeEventListener('click', foundCard);
    card.addEventListener('click', flipCard);
    card.classList.remove('flip');
  });

  resetBoard();
  updateTurn();
  shuffle();
}