// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k%nums.length
    l_idx = nums.length - k
    let part_1 = nums.slice(l_idx, nums.length)
    let part_2 = nums.slice(0, l_idx)
    rotated = part_1.concat(part_2)
    for(let i = 0; i< nums.length; i++){
        nums[i] = rotated[i]
    }

};