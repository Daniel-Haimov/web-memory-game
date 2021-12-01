boardSize = 4;
refreshGame();


function refreshGame() {
  initBoard().then((result) => {
    startGame();
  });
}




function initBoard() {

  return new Promise((resolve, reject) => {

    let memory_game_table = document.getElementById('memory_game_table');
    memory_game_table.innerHTML = '';
    let numOfCards = boardSize * boardSize;
    let c = 0;

    for (let i = 0; i < numOfCards; i++) {
      let card = document.createElement('div');
      card.className = "memory-card";
      c = Math.floor(i / 2);
      card.dataset.framework = `img${c}`;

      let front_face_card = document.createElement('img');
      front_face_card.className = "front-face";
      front_face_card.src = `src/img/${c}.svg`;
      front_face_card.alt = `img${c}`;

      let back_face_card = document.createElement("img");
      back_face_card.className = "back-face";
      back_face_card.src = "src/img/back.svg";
      back_face_card.alt = "back";



      card.appendChild(front_face_card);
      card.appendChild(back_face_card);

      memory_game_table.appendChild(card);
    }

    resolve(memory_game_table);

  });
}