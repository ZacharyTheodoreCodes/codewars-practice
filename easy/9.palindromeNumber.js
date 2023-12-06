let x = 121;

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let string = x.toString();

  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  if (reversed == x) {
    return true;
  }
  return false;
};

console.log(isPalindrome(x));
