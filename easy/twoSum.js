let nums = [3, 2, 4];
let target = 6;

var twoSum = function (nums, target) {
  let outputArr = [];
  for (let i = 0; i < nums.length; i++) {
    outputArr = [i];
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }
      if (nums[i] + nums[j] == target) {
        outputArr.push(j);
      }
    }
    if (outputArr.length == 2) {
      return outputArr;
    }
  }
};

console.log(twoSum(nums, target));

// solution 2
var twoSum2 = function (nums, target) {
  let numIndexMap = {};

  for (let i = 0; i < nums.length; i++) {
    //3,4,2
    let complement = target - nums[i];
    //3
    if (numIndexMap[complement] !== undefined) {
      //0,1
      return [numIndexMap[complement], i];
    }
    //3 = 0 , 2 = 1, 4 = 2
    numIndexMap[nums[i]] = i;
  }

  // No solution found
  return [];
};
