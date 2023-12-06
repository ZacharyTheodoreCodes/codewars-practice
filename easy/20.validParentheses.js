let s = "()[]{}";
let s1 = "([]{})";
let s2 = "([{])";

var isValid = function (s) {
  if (s.length <= 1) {
    return false;
  }
  let stack = [];
  for (char of s) {
    if (char == "(" || char == "[" || char == "{") {
      stack.push(char);
    } else {
      if (char == ")") {
        if (stack[stack.length - 1] == "(") {
          stack.pop(stack.length - 1);
        } else {
          return false;
        }
      }
      if (char == "]") {
        if (stack[stack.length - 1] == "[") {
          stack.pop(stack.length - 1);
        } else {
          return false;
        }
      }
      if (char == "}") {
        if (stack[stack.length - 1] == "{") {
          stack.pop(stack.length - 1);
        } else {
          return false;
        }
      }
    }
  }
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isValid(s2));

// solusi 2
var isValid2 = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (char of s) {
    if (brackets[char]) {
      if (stack.pop() !== brackets[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

//solusi 3
var isValid3 = function (s) {
  let stack = []; // create an empty stack to store opening brackets
  for (let c of s) {
    // loop through each character in the string
    if (c === "(" || c === "{" || c === "[") {
      // if the character is an opening bracket
      stack.push(c); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};
