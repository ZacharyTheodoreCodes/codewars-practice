/**
 * [1,2,3,4,5,4,5] -> [1,2,3]
 * [1,2,3,1,2,4] -> [3,4]
 */

let arr = [1, 2, 3, 4, 5, 4, 5];
function removeDuplicates(arr) {
  let resultArr = [];
  let arrObj = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (!arrObj[num]) {
      arrObj[num] = 1;
    } else {
      arrObj[num]++;
    }
  }

  for (let key in arrObj) {
    if (arrObj[key] == 1) {
      resultArr.push(+key);
    }
  }
  return resultArr;
}

console.log(removeDuplicates(arr));
