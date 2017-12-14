// 27. Remove Element

// var removeElement = function(nums, val) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }  
//   return nums.length;
// };

var removeElement = function(nums, val) {
  for(let i = nums.length - 1; i >= 0; i--){
    if(nums[i] === val){
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

removeElement([1,2,3,4,4,4,4,4,4], 3);