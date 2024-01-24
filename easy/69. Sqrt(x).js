var mySqrt = function (x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid -1 ;
    }
  }
};
/**
 * 1 2 3 4 5 6 7 8
 *
 */
let x = 8;
console.log(mySqrt(x));
