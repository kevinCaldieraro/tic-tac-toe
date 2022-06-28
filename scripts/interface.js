document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('click', handleClick);
  });
});

let winsCountPlayerO = document.querySelector('#winsPlayerO');
let winsCountPlayerX = document.querySelector('#winsPlayerX');
let drawsCount = document.querySelector('#draws');

function handleClick(event) {
  let position = event.target.id;
  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime === 0 && isWin()) {
        alert('Game over, the winner player is O');
        winsPlayerO++;
        winsCountPlayerO.innerHTML = winsPlayerO;
      } else if (playerTime === 1 && isWin()) {
        alert('Game over, the winner player is X');
        winsPlayerX++;
        winsCountPlayerX.innerHTML = winsPlayerX;
      } else if (isDraw()) {
        alert('Game over, draw');
        draws++;
        drawsCount.innerHTML = draws;
      }

      btnRestart.style.display = 'block';
    }, 10);
  }
  updateSquare(position);
}

function updateSquare(position) {
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function restartInterfaceSquares() {
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.innerHTML = `<div class=n></div>`;
  });
}

function hideBtnRestart() {
  btnRestart.style.display = 'none';
}

let btnRestart = document.querySelector('#reset');
btnRestart.addEventListener('click', () => {
  restartInterfaceSquares();
  hideBtnRestart();
  restartGame();
});
