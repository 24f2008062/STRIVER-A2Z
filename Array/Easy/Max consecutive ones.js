// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let no_of_one = 0
    let maxnumofone = 0
    for (let i =0; i < nums.length; i++){
        if(nums[i]==1){
            no_of_one += 1
        } else{
            if(no_of_one > maxnumofone){
                maxnumofone = no_of_one
            }
            no_of_one = 0
        }
        if(no_of_one > maxnumofone){
                maxnumofone = no_of_one
            }
        console.log(nums[i])
        console.log("1 count = " + no_of_one)
        console.log("max count = " + maxnumofone)
    }
    return maxnumofone
};