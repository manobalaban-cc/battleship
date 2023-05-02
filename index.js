import {displayBoard, displayMessage, displayTextMessage}
  from './event-handlers.js';

/**
 * This function called when You chose the game mode.
 * Gives You the data about what kind of game the AI would like to play, and where it places its ships.
 * @param {String} data the selected game mode, You have to parse it to use.
 */
export function selectGame(data) {
  displayMessage(data, 'black'); // Just an example to see how the data looks like, You may delete this line.
}

/**
 * Called every time, when the player clicks on a cell.
 * @param {Object} data the clicked cells data.
 */
export function handleClick(data) {
  displayMessage(data.x + data.y + data.clickType); // Just an example to see how the data looks like, You may delete this line.
}

/**
 * Called when the player clicks on the reset game button.
 */
export function resetGame() {
  // You can dete the whole body of this function (it is just an example), and implement Your solution.
  const board = [];
  for (let i = 0; i < 10; i++) {
    board.push([]);
    for (let j = 0; j < 10; j++) {
      board[i].push('');
    }
  }
  displayBoard({ boardNumber: 1, board: board });
  displayBoard({ boardNumber: 2, board: board });
}

/**
 * Called when the player clicks on the AI shoot button. Gives You random genarated coordinates.
 * You may leave the data later, when You implements smarter AI.
 * @param {Object} data Random generated coordinates, where the AI would like to shoot.
 */
export function aiShoot(data) {
  displayMessage(data.x + data.y); // Just an example to see how the data looks like, You may delete this line.
}


/*Example to show how the three callable function looks like in action.
The displayBoard function requeres an object as argument and it should have two property:
boardNumber with 1 (left) or 2 (right), to decide where would You like to display,
and board which sould be a nested array, to display.
displayMessage and displayTextMessage are functions to display messages:
requires two argument: first is a string to display, and the second is a color (can be text, rgb, rgba, hex color)
*/
displayBoard({ boardNumber: 1, board:
  [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']],
});
displayBoard({ boardNumber: 2, board:
  [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']],
});
displayMessage('message', 'green');
displayTextMessage('text message', 'red');
