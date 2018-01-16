// 53. Maximum Subarray

// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums) {
  if(!nums){
    return 0;
  }
  if(nums.length == 1){
    return nums[0];
  }
  
  var tempSum = nums[0];
  var maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] > (tempSum + nums[i])){
      tempSum = nums[i];
      console.log("tempSum1", tempSum);
    } else {
      tempSum += nums[i];
      console.log("tempSum2", tempSum);
    }
    if(tempSum > maxSum){
      maxSum = tempSum;
      console.log("maxSum", maxSum);
    }
  }
  return maxSum;
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);