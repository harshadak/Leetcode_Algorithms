// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
*/

var isValid = function(s) {
  if (s[0] == ')' || s[0] == '}' || s[0] == ']' || s.length === 1) {
    return false;
  }
  var dict = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  };
  var newArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      newArr.push(s[i]);
    } else {
      if (s[i] != dict[newArr[newArr.length-1]]) {
        return false;
      } else {
        console.log("Before pop",newArr);
        newArr.pop();
        console.log("After pop",newArr);
      }
    }
  }
  if (newArr.length) {
    return false;
  }
  return true;
};

isValid("()");