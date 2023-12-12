let board = 
[["8","3",".",".","7",".",".",".","."]
  ,["6",".",".","1","9","5",".",".","."]
  ,[".","9","8",".",".",".",".","6","."]
  ,["8",".",".",".","6",".",".",".","3"]
  ,["4",".",".","8",".","3",".",".","1"]
  ,["7",".",".",".","2",".",".",".","6"]
  ,[".","6",".",".",".",".","2","8","."]
  ,[".",".",".","4","1","9",".",".","5"]
  ,[".",".",".",".","8",".",".","7","9"]]
;

//Each row must contain the digits 1-9 without repetition.

function checkRow(board) {
  for (let row of board) {
    let rowDigit = {};
    for (let num of row) {
      if (num == ".") {
        continue;
      }
      if (!rowDigit[num]) {
        rowDigit[num] = 1;
      } else {
        return false;
      }
    }
  }
  return true;
}

function checkColumn(board) {
  for (let i = 0; i < board.length; i++) {
    let columnDigit = {};
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] == ".") {
        continue;
      }
      if (!columnDigit[board[j][i]]) {
        columnDigit[board[j][i]] = 1;
      } else {
        return false;
      }
    }
  }
  return true;
}

function checkGrid(board) {
  for (let subgrid = 0; subgrid < 9; subgrid++) {
    // Calculate the starting row and column for the current subgrid
    const startRow = Math.floor(subgrid / 3) * 3;
    const startCol = (subgrid % 3) * 3;

    let gridDigit = {};

    // Iterate within the current 3x3 subgrid
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] == ".") {
          continue;
        }
        if (!gridDigit[board[i][j]]) {
          gridDigit[board[i][j]] = 1;
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

var isValidSudoku = function (board) {
  if (checkColumn(board) && checkRow(board) && checkGrid(board)) {
    return true;
  }
  return false;
};

console.log(checkGrid(board));
console.log(isValidSudoku(board));
