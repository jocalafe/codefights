
//You have array of integers nums and you need to return a new counts array. In the new counts array, counts[i] is the number of smaller elements to the right of nums[i].

//Example
//For nums = [3, 8, 4, 1], the output should be
//countSmallerToTheRight(nums) = [1, 2, 1, 0].

function countSmallerToTheRight(nums) {
  var counts = [], smallerCount = 0, i, j;
  for (i = 0; i < nums.length; i += 1) {
    for (j = i + 1; j < nums.length; j += 1){
      if (nums[j] < nums[i]) {
        smallerCount += 1;
      }
    }
    counts.push(smallerCount);
    smallerCount = 0;
  }
  return counts;
}
