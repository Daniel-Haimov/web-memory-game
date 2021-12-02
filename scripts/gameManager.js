
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

    updateCookieScore(leftPlayerScore, rightPlayerScore);
    setTimeout(() => {
      startGame();
    }, 1000);
    
  }
}


function updateScore(playerScoreLabel, score) {
  playerScoreLabel.innerHTML = "Score: " + score;
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

function startGame() {
  let numOfCards = boardSize * boardSize;
  NUMBER_OF_PAIRS = Math.floor(numOfCards / 2 + numOfCards % 2);
  pairsFoundedCount = 0;

  cards = document.querySelectorAll('.memory-card');
  cards.forEach(card => {
    card.removeEventListener('click', foundCard);
    card.addEventListener('click', flipCard);
    card.classList.remove('flip');
  });

  resetBoard();
  updateTurn();
  shuffle();
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