var addToArrayForm = function (num, k) {
  let sum = BigInt(num.join("")) + BigInt(k);
  return sum
    .toString()
    .split("")
    .map((x) => Number(x));
};

let num = [
  1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0, 1, 2, 0, 0,
];
let k = 34;
console.log(addToArrayForm(num, k));
