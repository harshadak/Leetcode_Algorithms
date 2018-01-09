// 35. Search Insert Position
// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You may assume no duplicates in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
  var position;
  
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
      position = left;
    } else {
      right = mid - 1;
      position = mid;
    }
  }
  return position;
};

searchInsert([1, 3, 5, 7, 12, 40], 1);