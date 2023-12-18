let numRows = 5;
//[ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(0);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 0; j < row.length; j++) {
      if (row[j] == 0) {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
    result.push(row);
  }
  return result;
};

console.log(generate(5));
