

setCookieIntoServer('test', 'test', 10);
console.log(getCookie('test'));
if (getCookie('settings') === undefined || getCookie('settings') === "") {
  setCookie("Jane Roe", 0, "Jhon Doe", 0, 5);
}
console.log(getCookie('settings'));







refreshGame();
function refreshGame() {
  initCookies();
  updateScore(leftPlayerScoreLBL, leftPlayerScore);
  updateScore(rightPlayerScoreLBL, rightPlayerScore);
  initBoard().then((result) => {
    startGame();
  });
}
