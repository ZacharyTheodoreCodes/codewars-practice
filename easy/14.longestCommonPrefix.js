//solution 1
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let sorted = strs.sort();
  let firstStr = sorted[0];
  let lastStr = sorted[sorted.length - 1];

  //cek tiap char nya sama/engga
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] == lastStr[i]) {
      prefix += firstStr[i];
    } else {
      //sekali ketemu yang gak sama, langsung break loopnya
      break;
    }
  }
  return prefix;
};

let strs = ["flower", "flow", "flight"];

//solution 2
var longestCommonPrefix2 = function (strs) {
  let commonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[0][i] != strs[j][i]) {
        return commonPrefix;
      }
    }
    commonPrefix += strs[0][i];
  }
  return commonPrefix;
};

console.log(longestCommonPrefix2(strs));
