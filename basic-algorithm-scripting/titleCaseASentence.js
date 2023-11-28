function titleCase(str) {
  let splitted = str.split(" ");
  let outputArr = [];
  for (let i = 0; i < splitted.length; i++) {
    let uppercased = "";
    let perWord = splitted[i];
    //console.log(perWord);
    for (let j = 0; j < perWord.length; j++) {
      if (j === 0) {
        uppercased += perWord[0].toUpperCase();
      } else {
        uppercased += perWord[j].toLowerCase();
      }
    }
    outputArr.push(uppercased);
  }
  return outputArr.join(" ");
}

titleCase("I'm a little tea pot");
