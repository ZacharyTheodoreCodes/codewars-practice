var isPowerOfThree = function (n) {
  if (n < 1) {
    return false;
  }
  while (n >= 1) {
    if (n % 3 == 0) {
      n = n / 3;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPowerOfThree(0));

