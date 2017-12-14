// Similar problem to 38. Count and Say
// Given a number, count and say the number. This algorithm doesn't depend on another input string.

function countAndSay(n) {
  n = String(n);
  var count = 0;
  var outStr = "";
  var currElem = n[0];
  for (let i = 0; i < n.length + 1; i++) {
    if (n[i] !=currElem) {
      outStr += count + currElem;
      currElem = n[i];
      count = 1;
    } else {
      count++;
    }
  }
  return outStr;
}

countAndSay(8);