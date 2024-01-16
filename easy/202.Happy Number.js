function nextNumber(n) {
  let newNumber = 0;
  while (n !== 0) {
    let num = n % 10;
    newNumber += num * num;
    n = Math.floor(n / 10);
  }
  console.log(newNumber, "newNumber");
  return newNumber;
}

function isHappy(n) {
  let set = new Set();
  console.log(set,"set1");
  //true && true
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = nextNumber(n);
  }
  console.log(set, "set");
  return n === 1;
}


console.log(isHappy(3));