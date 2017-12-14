// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
  if (num === 0) {
    return true;
  }
  if (num < 0 || (num % 10 === 0)) {
    return false;
  }
  var reversed = 0;
  var original = num;
  while (num > 0) {
    reversed = (reversed * 10) + (num % 10);
    num = Math.floor(num / 10);
  }
  return original == reversed;
};

isPalindrome(256);