

function setCookie(leftName, leftScore, RightName, rightScore, boardSize) {
    let d = new Date();
    d.setTime(d.getTime() + (31 * 24 * 60 * 60 * 1000)); //31 dayes
    let expDate = d.toGMTString();
    document.cookie = `${leftName}@${leftScore}@${RightName}@${rightScore}@${boardSize}; expires=${expDate};`;
}

function initCookies() {
    leftPlayerUsername.innerHTML    = document.cookie.split('@')[0];
    leftPlayerScore                 = document.cookie.split('@')[1];
    rightPlayerUsername.innerHTML   = document.cookie.split('@')[2];
    rightPlayerScore                = document.cookie.split('@')[3];
    boardSize                       = document.cookie.split('@')[4];
}


function updateCookieScore(leftScore, rightScore) {
    initCookies();
    leftPlayerScore = leftScore;
    rightPlayerScore = rightScore;


    setCookie(leftPlayerUsername.innerHTML ,
        leftPlayerScore              ,
        rightPlayerUsername.innerHTML,
        rightPlayerScore             ,
        boardSize                    );
}