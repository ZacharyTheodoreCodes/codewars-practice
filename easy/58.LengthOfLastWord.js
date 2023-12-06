let s = "   fly me   to   the moon  ";

var lengthOfLastWord = function (s) {
  let wordArr = s.split(" ").filter(Boolean);
  return wordArr[wordArr.length - 1].length;
};

console.log(lengthOfLastWord(s));
