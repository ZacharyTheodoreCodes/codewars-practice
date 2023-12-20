let s = "ab";
let t = "a";

var isAnagram = function (s, t) {
  let sTable = {};
  for (let char of s) {
    if (!sTable[char]) {
      sTable[char] = 1;
    } else {
      sTable[char]++;
    }
  }
  for (let char of t) {
    if (sTable[char]) {
      sTable[char]--;
    } else {
      return false;
    }
  }

  for (let char in sTable) {
    if (sTable[char] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram(s, t));
