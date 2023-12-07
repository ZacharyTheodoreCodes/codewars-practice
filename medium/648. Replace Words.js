let dictionary = ["catt", "cat", "bat", "rat"];
let sentence = "the cattle was rattled by the battery";
let output = "the catt was rat by the bat"; //"the cat was rat by the bat"

var replaceWords = function (dictionary, sentence) {
    let sorted = dictionary.sort()

  let splitted = sentence.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    //Kalau n kata terdepan tiap2 kata sama dengan salah satu dari dictionary,
    let eachWord = splitted[i];
    for (let j = 0; j < sorted.length; j++) {
      if (eachWord.slice(0, sorted[j].length) == sorted[j]) {
        splitted[i] = sorted[j];
        break;
      }
    }
  }
  return splitted.join(" ");
};

console.log(replaceWords(dictionary, sentence));
