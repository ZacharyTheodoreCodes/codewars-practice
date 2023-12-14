let numRows = 5;

var generate = function (numRows) {
  let result = [];
  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(0);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(row);
  }
return result
};

console.log(generate(numRows));
