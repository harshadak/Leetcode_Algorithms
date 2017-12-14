// 26. Remove Duplicates from Sorted Array

function removeDup(arr) {
  if (arr.length <= 1) { return arr; }
  var i = 0;
  while (i < arr.length) {
    if (arr[i] == arr[i+1]) {
      arr.splice(i,1);
    } else {
      i++;
    }
  }
  console.log(arr);
  return arr.length;
}

removeDup([1,1,2,3,3,4,4,4,4,5,6,7,7,7,7]);

