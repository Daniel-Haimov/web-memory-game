let LeftNameValue  = document.getElementById("LeftName") ;
let rightNameValue = document.getElementById("RightName");
let rb_board_size_opt = document.getElementsByName('board_size_opt');


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    lockBoard = true;

    LeftNameValue .value  = leftPlayerUsername  .innerHTML;
    rightNameValue.value  = rightPlayerUsername .innerHTML;
    rb_board_size_opt[boardSize - 4].checked = true;

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#060AB2";
    lockBoard = false;


    if (LeftNameValue.value === "" || LeftNameValue.value.includes("@")){
      LeftNameValue.value = "Jane Roe";
    }
    if (rightNameValue.value === "" || rightNameValue.value.includes("@")){
      rightNameValue.value = "Jhon Doe";
    }

    leftPlayerUsername .innerHTML = LeftNameValue .value;
    rightPlayerUsername.innerHTML = rightNameValue.value;

    setCookie(LeftNameValue.value, leftPlayerScore, rightNameValue.value, rightPlayerScore, boardSize);

    updateTable();



    // document.getElementById("main").removeEventListener('click', closeNav);
  }

function updateTable(){
  for (let i = 0; i < rb_board_size_opt.length; i++) {
    if (rb_board_size_opt[i].checked){
      if (i + 4 != boardSize){
        boardSize = i + 4;
        setCookie(LeftNameValue.value, leftPlayerScore, rightNameValue.value, rightPlayerScore, boardSize);
        refreshGame();
        return;
      }
    }
  }
}
