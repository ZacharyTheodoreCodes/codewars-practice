let nums = [2, 7, 11, 15];

var twoSum = function (nums, target) {
  let result = [];
  let table = {};
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];

    if (table[remainder] !== undefined) {
      result.push(table[remainder], i);
    } else {
      table[nums[i]] = i;
    }
  }
  return result;
};

console.log(twoSum(nums, 9));
