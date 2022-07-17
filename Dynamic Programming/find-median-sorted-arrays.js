/*
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 * 
 * Optimal solution could be
 * We dont need entire array to sort, track only middle elements
 * to culculate the mean. Which can be done in O(log (m+n))
 * [1,2,3,4,6,7],[2]
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0
        , j = 0
        , m1 = -1
        , m2 = -1
        , n = nums1.length
        , m = nums2.length;
    for (let count = 0; count <= (n + m) / 2; count++) {
        m2 = m1;
        if (i != n && j != m) {
            m1 = (nums1[i] < nums2[j]) ? nums1[i++] : nums2[j++]
        } else if (i < n) {
            m1 = nums1[i++]
        } else {
            m1 = nums2[j++]
        }
    }
    if ((m + n) % 2 == 0) {
        return (m1 + m2) / 2
    }
    return m1
};

console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7], [2]))