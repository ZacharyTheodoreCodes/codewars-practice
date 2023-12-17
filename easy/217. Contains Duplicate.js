let nums = [1, 2, 3, 1];

var containsDuplicate = function (nums) {
  let numTable = {};
  for (let num of nums) {
    if (!numTable[num]) {
      numTable[num] = 1;
    } else {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
