let LeftNameValue, rightNameValue;


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    lockBoard = true;
    // document.getElementById("main").addEventListener('click', closeNav);
    LeftNameValue  = document.getElementById("LeftName") .value;
    rightNameValue = document.getElementById("RightName").value;
    if (LeftNameValue === ""){
      document.getElementById("LeftName") .value = "Jane Roe";
    }
    if (rightNameValue === ""){
      document.getElementById("RightName").value = "Jhon Doe";
    }


  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "#060AB2";
    lockBoard = false;

    LeftNameValue  = document.getElementById("LeftName") .value;
    rightNameValue = document.getElementById("RightName").value;
    if (LeftNameValue === ""){
      LeftNameValue = "Jane Roe";
    }
    if (rightNameValue === ""){
      rightNameValue = "Jhon Doe";
    }

    leftPlayerUsername .innerHTML = LeftNameValue ;
    RightPlayerUsername.innerHTML = rightNameValue;


    let rb_board_size_opt = document.getElementsByName('board_size_opt');
    for (let i = 0; i < rb_board_size_opt.length; i++) {
      if (rb_board_size_opt[i].checked){
        if (i + 4 != boardSize){
          boardSize = i + 4;
          refreshGame();
          console.log(`boardSize = ${boardSize}`);
        }
      }
    }


    // document.getElementById("main").removeEventListener('click', closeNav);
  }

function settings(RightName, LeftName){
    
    
}
