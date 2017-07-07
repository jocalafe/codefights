
//Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] and the absolute difference between i and j is less than or equal to k.

//Example

//For nums = [0, 1, 2, 3, 5, 2] and k = 3, the output should be
//containsCloseNums(nums, k) = true.

function containsCloseNums(nums, k) {
  var i, j;
  var viewedNums = {};
  for (i = 0; i < nums.length; i += 1) {
    if (viewedNums[nums[i]] !== undefined && i - viewedNums[nums[i]] <= k){
      return true;
    }
    viewedNums[nums[i]] = i;
  }
  return false;
}
