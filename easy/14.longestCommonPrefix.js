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

let strs = ["aabc", "aab", "aabe"];

//solution 2
var longestCommonPrefix2 = function (strs) {
    /**
     * 
     * 
     */
};

console.log(longestCommonPrefix2(strs));
