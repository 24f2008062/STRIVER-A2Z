// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

// Example 1

// Input: nums = [8, 8, 7, 6, 5]
// Output: 7
// Explanation:
// The largest value in nums is 8, the second largest is 7

class Solution {
  largestElement(nums) {
    let max = 0;
    let smax = 0;
    for (let i = 0; i <= nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
      }
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] < max && nums[i] > smax) {
          smax = nums[i];
        }
      }
    }
    return max;
    return smax;
  }
}