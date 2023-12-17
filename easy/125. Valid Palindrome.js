let s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  //remove all non-alphanumeric character
  let string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (string.length == 0) return true;
  let reversed = string.split("").reverse().join("");
  if (string == reversed) return true;
  return false;
};

console.log(isPalindrome(s));
