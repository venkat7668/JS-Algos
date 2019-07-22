/**
 * @author Venkat Lankalapalli
 * @email venkat7668[@]gmail.com
 * @create date 2019-06-10 11:47:07
 * @modify date 2019-06-10 11:47:07
 * @desc find x index in given sorted array
 *       Time complexity O(logn)
 */

exports.binarySearch = function (arr, x) {
    let l = 0;
    let r = arr.length - 1;
    while (r >= l) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == x) {
            return mid;
        } else if (arr[mid] > x) {
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }
    return -1;
}