let n = 3;
let output = ["1", "2", "Fizz"];

/**
 * 
 *divisible by 3 : "Fizz"
by 5: "Buzz"
divisible by 3 and 5 : "FizzBuzz"

 */

var fizzBuzz = function (n) {
  let output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      output.push("FizzBuzz");
    } else if (i % 5 == 0) {
      output.push("Buzz");
    } else if (i % 3 == 0) {
      output.push("Fizz");
    } else {
      output.push(i.toString());
    }
  }
  return output;
};
