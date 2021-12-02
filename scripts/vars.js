let LeftNameValue  = document.getElementById("LeftName") ;
let rightNameValue = document.getElementById("RightName");
let rb_board_size_opt = document.getElementsByName('board_size_opt');



let cards;
let leftPlayer = document.getElementById('leftPlayer');
let rightPlayer = document.getElementById('rightPlayer');
let leftPlayerUsername = document.getElementById('leftPlayerUsername');
let rightPlayerUsername = document.getElementById('RightPlayerUsername');

let leftPlayerScoreLBL = document.getElementById('leftPlayerScore');
let rightPlayerScoreLBL = document.getElementById('rightPlayerScore');

let leftPlayerScore ;
let rightPlayerScore;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let changeTurn = 0;
let pairsFoundedCount = 0;
let NUMBER_OF_PAIRS;
let boardSize;


