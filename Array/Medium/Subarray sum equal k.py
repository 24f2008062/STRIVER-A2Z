# Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

# A subarray is a contiguous non-empty sequence of elements within an array.

# Example 1:

# Input: nums = [1,1,1], k = 2
# Output: 2
# Example 2:

# Input: nums = [1,2,3], k = 3
# Output: 2

class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        if not nums:
            return 0

        psum = [0] * len(nums)
        psum[0] = nums[0]

        for i in range(1, len(nums)):
            psum[i] = psum[i-1] + nums[i]

        pdict = {}
        scount = 0

        for i in range(len(psum)):
            if psum[i] == k:
                scount += 1

            f = psum[i] - k

            if f in pdict:
                scount += pdict[f]
            
            pdict[psum[i]] = pdict.get(psum[i], 0) + 1
        return scount
            
        


        