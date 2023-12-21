let nums = [0, 1];

var missingNumber = function (nums) {
  let obj = {};
  for (num of nums) {
    if (!obj[num]) {
      obj[num] = 1;
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!obj[i]) {
      return i;
    }
  }
};

console.log(missingNumber(nums));
