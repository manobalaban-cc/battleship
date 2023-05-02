import {selectGame, handleClick, resetGame, aiShoot} from './index.js';
import {data} from './data.js';

const CHAR_CODE_OF_A = 65;
const PLAYING_AREA_HEIGHT = 80;

function initGame() {
  document.querySelector('#reset').addEventListener('click', resetGame);
  document.querySelector('#aiShoot').addEventListener('click', () => {
    const boardSize = document.getElementById('boardSize').value;
    aiShoot({
      x: String.fromCharCode(Math.floor(
        (Math.random() * boardSize) + CHAR_CODE_OF_A,
      )),
      y: Math.floor((Math.random() * boardSize) + 1),
    });
  });
  for (const gameNumber in data) {
    document.getElementById('mode').insertAdjacentHTML('beforeend', `
      <option value=${data[gameNumber]}>${gameNumber}</option>
    `);
  }
  document.querySelector('.mode > select')
    .addEventListener('input', (e) => selectGame(e.target.value));
}

export function displayBoard(boardStruct) {
  const grid = boardStruct.board;
  const containerElement = document.querySelector(`.container${boardStruct.boardNumber}`);
  console.log(containerElement);
  containerElement.innerHTML = '';
  containerElement.insertAdjacentHTML('afterbegin', creatHeadRow(grid.length));
  for (let x = 0; x < grid.length; x++) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    rowElement.insertAdjacentHTML(
      'afterbegin',
      `<div class="head-cell" style='heigth: ${90 / (grid.length + 1)}vh; width: 3vh'>${String.fromCharCode(CHAR_CODE_OF_A + x)}</div>`,
    );
    for (let y = 0; y < grid[x].length; y++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.innerHTML = grid[x][y];
      cellElement.style.width = `${PLAYING_AREA_HEIGHT / (grid[x].length + 1)}vh`;
      cellElement.style.height = `${PLAYING_AREA_HEIGHT / (grid[x].length + 1)}vh`;
      cellElement.style.fontSize = `${(PLAYING_AREA_HEIGHT / (grid[x].length + 1)) - 5}vh`;
      if (boardStruct.boardNumber === 2) {
        cellElement.addEventListener('click', () => {
          handleClick({
            x: String.fromCharCode(CHAR_CODE_OF_A + x),
            y: y + 1,
            clickType: 'left',
          });
        });
        cellElement.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          handleClick({
            x: String.fromCharCode(CHAR_CODE_OF_A + x),
            y: y + 1,
            clickType: 'right',
          });
        });
      }
      rowElement.appendChild(cellElement);
    }
    containerElement.appendChild(rowElement);
  }
}

function creatHeadRow(length) {
  let result = `<div class='head-row'><div style='width: ${PLAYING_AREA_HEIGHT / (length + 1)}vh'></div>`;
  for (let i = 1; i <= length; i++) {
    console.log(length);
    result += `<div class="head-cell" style='width: ${PLAYING_AREA_HEIGHT / (length + 1)}vh'>${i}</div>`;
  }
  return `${result}</div>`;
}

export function displayMessage(message, color) {
  document.getElementById('display').style.color = color;
  document.getElementById('display').innerHTML = message;
}

export function displayTextMessage(message, color) {
  document.getElementById('textDisplay').style.color = color;
  document.getElementById('textDisplay').innerHTML = message;
}

window.addEventListener('load', () => {
  initGame();
});
