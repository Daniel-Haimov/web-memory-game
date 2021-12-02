function setCookie(leftName, leftScore, RightName, rightScore, boardSize) {
    setCookieIntoServer('settings', `${leftName}@${leftScore}@${RightName}@${rightScore}@${boardSize}`, 31);
}


function setCookieIntoServer(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function initCookies() {
    let s = getCookie("settings");
    if (s === undefined) {
        return null;
    }
    let settings = s.split('@');
    leftPlayerUsername.innerHTML = settings[0];
    leftPlayerScore = settings[1];
    rightPlayerUsername.innerHTML = settings[2];
    rightPlayerScore = settings[3];
    boardSize = settings[4];
    return settings;
}


function updateCookieScore(leftScore, rightScore) {
    initCookies();
    leftPlayerScore = leftScore;
    rightPlayerScore = rightScore;


    setCookie(leftPlayerUsername.innerHTML,
        leftPlayerScore,
        rightPlayerUsername.innerHTML,
        rightPlayerScore,
        boardSize);
}