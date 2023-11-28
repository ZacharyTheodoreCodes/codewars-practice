function findLongestWordLength(str) {
    let splitted = str.split(" ")
    let maxLength = -Infinity

    for(let i = 0 ; i < splitted.length ;i ++){

        if (splitted[i].length > maxLength){
            maxLength = splitted[i].length
        }
    }
    return maxLength
  }
  
  let word = "The quick brown fox jumped over the lazy dog"
 console.log(findLongestWordLength(word)); 