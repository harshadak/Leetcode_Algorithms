// 38. Count and Say

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n == 1) {
    return "1";
  }
  var tempStr = "";
  var count = 1;
  var numExit = 1;
  var outStr = "1";
  while (n != numExit) {
    for (let i = 0; i < outStr.length; i++) {
      if (outStr[i] != outStr[i+1]) {
        tempStr += count + outStr[i];
        count = 1;
      } else {
        count++;
      }
    }
    outStr = tempStr;
    tempStr = "";
    numExit++;
  }
  return outStr;
};

countAndSay(4);