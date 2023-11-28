function getIndexToIns(arr, num) {
  const sorted = arr.sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (num > sorted[i]) {
      index = i + 1;
    } else if (num === sorted[i]) {
      index = i;
    }
  }
  return index;
}

// getIndexToIns([40, 60], 50);
console.log(getIndexToIns([5, 3, 20, 3], 5));
//should return 3.
