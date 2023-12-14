let s = "loveleetcode";

var firstUniqChar = function (s) {
  let obj = {};
  for (let char of s) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar(s));
