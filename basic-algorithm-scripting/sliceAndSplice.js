function frankenSplice(arr1, arr2, n) {
  let arr = arr2.slice(); // Create a copy of arr2
  let arr2Splitted = arr.splice(0, n);

  for (let el of arr1) {
    arr2Splitted.push(el);
  }

  for (let el of arr) {
    arr2Splitted.push(el);
  }

  return arr2Splitted;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
//frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
