let s = "LVIII";
const romanNum = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  const splitted = s.split("");
  //console.log(splitted);
  let output = 0;
  let index = 0;
  while (index < splitted.length) {
    if (romanNum[splitted[index]] < romanNum[splitted[index + 1]]) {
      output += romanNum[splitted[index + 1]] - romanNum[splitted[index]];
      index += 2;
    } else {
      //console.log(index, "index");
      //console.log(romanNum[splitted[index]]);
      output += romanNum[splitted[index]];
      index++;
    }
    //console.log(output);
  }

  return output
};

console.log(romanToInt(s));
