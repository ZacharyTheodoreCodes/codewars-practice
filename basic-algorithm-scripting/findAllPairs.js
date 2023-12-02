// Find All Pair
// [1, 2, 5, 6, 5, 2]  -->  2
// [1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
let arr = [1, 2, 2, 20, 6, 20, 2, 6, 2];

function duplicates(array) {
  let obj = {};
//let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }
//output akan bertambah setiap ada 2 angka yang sama
  let output = 0
  //cari pairnya
  for(let num in obj){
    output += Math.floor(obj[num]/2)
  }
  return output
}

console.log(duplicates(arr));

