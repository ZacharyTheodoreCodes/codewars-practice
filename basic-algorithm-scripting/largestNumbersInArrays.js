function largestOfFour(arr) {
  let outputArr = [] //store largest number in each array
  for ( let i = 0 ; i < arr.length; i ++){
    let largestNum = -Infinity
    for ( let j = 0 ; j < arr[i].length; j ++){
        if (arr[i][j] > largestNum){
            largestNum = arr[i][j]
        }
    }
    outputArr.push(largestNum)
  }
  return outputArr
}

let arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
console.log(largestOfFour(arr));
