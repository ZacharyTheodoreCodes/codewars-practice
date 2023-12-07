let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
//[0,1,2,3,4,_,_,_,_,_]
//
var removeDuplicates = function (nums) {
  let uniqueIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[uniqueIndex] = nums[i];
      uniqueIndex++;
    }
  }
  return uniqueIndex;
};

console.log(removeDuplicates(nums));
