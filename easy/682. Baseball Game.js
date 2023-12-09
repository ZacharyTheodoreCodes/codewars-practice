let ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];

var calPoints = function (operations) {
  let arr = [];
  for (let char of operations) {
    if (char !== "+" && char !== "D" && char !== "C") {
      arr.push(Number(char));
    } else if (char == "+") {
      arr.push(Number(arr[arr.length - 1]) + Number(arr[arr.length - 2]));
    } else if (char == "D") {
      arr.push(Number(arr[arr.length - 1] * 2));
    } else if (char == "C") {
      arr.pop();
    }
  }
  let output = 0;
  for (let num of arr) {
    output += num;
  }
  return output;
};

console.log(calPoints(ops));
