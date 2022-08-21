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
 * to culculate the mean. Which can be done in O(log(min(m,n)))
 * [1,2,3,4,6,7],[2]
 * https://www.youtube.com/watch?v=NTop3VTjmxk
 */
function findMedianSortedArrays(ar1, ar2) {
    if (ar1.length > ar2.length) {
        //ensure binary-search happens on smallest array
        [ar1, ar2] = [ar2, ar1]
    }
    let a1Len = ar1.length;
    let a2Len = ar2.length;
    let median_pos = Math.floor((a1Len + a2Len + 1) / 2);
    let low = 0;
    let high = a1Len;

    while (low < high) {
        let cut1 = Math.floor(low + (high - low) / 2);
        let cut2 = median_pos - cut1;

        let l1 = ar1[cut1 - 1] || Number.MIN_VALUE
        let l2 = ar2[cut2 - 1] || Number.MIN_VALUE
        let r1 = ar1[cut1] || Number.MAX_VALUE
        let r2 = ar2[cut2] || Number.MAX_VALUE

        if (l1 <= r2 && l2 <= r1) {
            //return median base on number of elements in the both arrays
            if ((a1Len + a2Len) % 2 == 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
            } else {
                return Math.max(l1, l2)
            }
        } else if (l1 > r2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1
        }
    }
    return 0;
}

console.log(findMedianSortedArrays([4], [1, 3]))