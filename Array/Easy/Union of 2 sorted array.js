// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.

// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.

// Example 1

// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]
// Output: [1, 2, 3, 4, 5, 7]
// Explanation:
// The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

class Solution {
    unionArray(nums1, nums2) {
        let m = nums1.length
        let n = nums2.length

        let temp = []

        let i=0;
        let j=0;

        while(i<m && j<n){
            if(nums1[i]<nums2[j]){
                if(temp.length == 0 || temp[temp.length - 1] != nums1[i]){
                    temp.push(nums1[i++])
                } else i++
            } else if(nums1[i] == nums2[j]){
                if (temp.length == 0 || temp[temp.length - 1] != nums1[i]){
                    temp.push(nums1[i])
                }
                i++
                j++
            }
            else {
                if(temp.length == 0 || temp[temp.length - 1] != nums2[j]){
                    temp.push(nums2[j++])
                } else j++
            }
        }
        if( i >= m ){
            for(j;j<n;j++){
                if (temp.length == 0 || temp[temp.length - 1] != nums2[j]) temp.push(nums2[j])
            }
        }
        if ( j >= n ){
            for(i;i<m;i++){
                if (temp.length == 0 || temp[temp.length - 1] != nums1[i])temp.push(nums1[i])
            }

        }
        return temp
        
    }
}