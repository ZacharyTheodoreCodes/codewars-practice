let s = ["h", "e", "l", "l", "o"];

// var reverseString = function(s) {
//     return s.reverse()
// };

// Solution 2:
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }
  return s;
};

console.log(reverseString(s));
