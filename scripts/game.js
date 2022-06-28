let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let winsPlayerO = 0;
let winsPlayerX = 0;
let draws = 0;

function handleMove(position) {
  if (gameOver) {
    return;
  }
  if (board[position] == '') {
    board[position] = symbols[playerTime];

    gameOver = isWin();
    isDraw();

    if (gameOver == false) {
      playerTime = playerTime == 0 ? 1 : 0;
    }
  }
  // isDraw();
  return gameOver;
}

function isWin() {
  for (let i = 0; i < winStates.length; i++) {
    let seq = winStates[i];
    let pos0 = seq[0];
    let pos1 = seq[1];
    let pos2 = seq[2];

    if (
      board[pos0] == board[pos1] &&
      board[pos0] == board[pos2] &&
      board[pos0] != ''
    ) {
      return true;
    }
  }

  return false;
}

function isDraw() {
  if (
    board[0] != '' &&
    board[1] != '' &&
    board[2] != '' &&
    board[3] != '' &&
    board[4] != '' &&
    board[5] != '' &&
    board[6] != '' &&
    board[7] != '' &&
    board[8] != ''
  ) {
    return (gameOver = true);
  }
  return false;
}

function restartGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  playerTime = 0;
  gameOver = false;
}
