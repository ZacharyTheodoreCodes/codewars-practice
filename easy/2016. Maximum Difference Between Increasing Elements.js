var maximumDifference = function (nums) {
  let maxDifference = -1;
  let lowestNum = Infinity;
  // 19,4,2,10,3,1,5
  for (let num of nums) {
    if (num < lowestNum) {
      lowestNum = num;
    } else if (num - lowestNum > maxDifference) {
      maxDifference = num - lowestNum;
    }
  }
  if (maxDifference <= 0) {
    return -1;
  } else {
    return maxDifference;
  }
};
let nums = [7, 1, 5, 4];
console.log(maximumDifference(nums));
