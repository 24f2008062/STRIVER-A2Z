# Given an integer array nums, return a list of all the leaders in the array.
# A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.

# Example 1
# Input: nums = [1, 2, 5, 3, 1, 2]
# Output: [5, 3, 2]
# Explanation:
# 2 is the rightmost element, 3 is the largest element in the index range [3, 5], 5 is the largest element in the index range [2, 5]

# Example 2
# Input: nums = [-3, 4, 5, 1, -4, -5]
# Output: [5, 1, -4, -5]
# Explanation:
# -5 is the rightmost element, -4 is the largest element in the index range [4, 5], 1 is the largest element in the index range [3, 5] and 5 is the largest element in the range [2, 5]

# Brute force   | O(n^2)

# class Solution:
#     def leaders(self, nums):
#         leaders = []
#         for i in range(len(nums)):
#             is_leader = True
#             for j in range(i+1, len(nums)):
#                 if nums[i] < nums[j]:
#                     is_leader = False
#                     break
            
#             if is_leader:
#                 leaders.append(nums[i])
#         return leaders

# Better Approach | O(n)

class Solution:
    def leaders(self, nums):
        right_max = float('-inf')
        leaders = []
        for i in range(len(nums)-1, -1, -1):
            if nums[i] >= right_max:
                right_max = nums[i]
                leaders.append(nums[i])
        
        high = len(leaders) - 1
        low = 0
        while low <= high:
            leaders[low], leaders[high] = leaders[high], leaders[low]
            high -= 1
            low += 1
        return leaders


