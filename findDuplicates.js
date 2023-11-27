/**
Find Duplicates
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
 */

let arr = [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"];
function findDuplicates(arr) {
  let numArr = arr.filter((el) => typeof el == "number");
  let duplicatesObj = {};
  let duplicatesArr = [];

  for (let i = 0; i < numArr.length; i++) {
    if (!duplicatesObj[numArr[i]]) {
      duplicatesObj[numArr[i]] = 1;
    } else if (duplicatesObj[numArr[i]] == 1) {
      duplicatesArr.push(numArr[i]);
      duplicatesObj[numArr[i]]++;
    }
  }

  return duplicatesArr;
}

console.log(findDuplicates(arr));
