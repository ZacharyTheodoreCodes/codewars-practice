var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }

  let firstIndex = 1;
  let secondIndex = 1;
  let thirdIndex = 0;
  for (let i = 2; i <= n; i++) {
  
    thirdIndex = firstIndex + secondIndex;
    firstIndex = secondIndex;
    secondIndex = thirdIndex;
  }
  return thirdIndex;
};

console.log(climbStairs(5));

