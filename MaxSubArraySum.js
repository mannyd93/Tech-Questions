//Write function that finds largest sum of array of length sub array
//return null if subarray larger
//calculate first sum and set to largest
//loop through rest of array and change max sum if larger

function maxSubarraySum(nums, subArrayLength){
  // add whatever parameters you deem necessary - good luck!
  if(subArrayLength > nums.length) return null;
  let maxSum = 0;
  for(let i = 0; i < subArrayLength; i++){
      maxSum += nums[i];
  }
  let tempSum = maxSum;
  for(let i = subArrayLength; i < nums.length; i++){
       tempSum += nums[i]- nums[i - subArrayLength];
      maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
  
}
