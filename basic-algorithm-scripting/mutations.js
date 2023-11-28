function mutation(arr) {
    let lowercased = arr.map(word => word.toLowerCase());
    let splitted = lowercased[1].split("");
  
    return splitted.every(letter => lowercased[0].includes(letter));
  }
  

//mutation(["hello", "hey"]);
mutation(["Tiger", "Zebra"]);
//should return false.
