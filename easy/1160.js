// let words = "tree"
// let chars = "atach"

// function checkString(words,chars){

//     let splitted = words.split('')
//     console.log(splitted.every(el => chars.includes(el)));

//     //console.log(chars.includes(words));

// }

// console.log(checkString(words,chars));
/**
 * bikin wordFreq
 * bikin charFreq
 * pas looping wordFreq cek juga apakah charFreqnya ada, dan wordFreq <= charFreq
 */

let words = ["cataa", "bt", "hat", "tree"];
let chars = "atach";

var countCharacters = function (words, chars) {
  const charFreq = {};
  for (char of chars) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  function isGoodString(word, charFreq) {
    let wordFreq = {};
    for (char of word) {
      wordFreq[char] = (wordFreq[char] || 0) + 1;
      if (!charFreq[char] || charFreq[char] < wordFreq[char]) {
        return false;
      }
    }
    // for (char of word) {
    // }
    return true;
  }

  let output = 0;
  for (word of words) {
    if (isGoodString(word, charFreq)) {
      output += word.length;
    }
  }
  return output;
};

countCharacters(words, chars);
