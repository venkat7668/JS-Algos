/*
 * Description: Find min in n times rotated sorted array
 * @param : Rotated sorted array
 * @return: min value in the array
 * Time complixity : O(log(n))
 * Ex:
 * Input: nums = [3,4,5,1,2] rotated 3 times
 * Output: 1
 */

function findMin(arr) {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low < high) {
        mid = Math.floor(low + (high - low) / 2); // Math.floor((high+low)/2)
        if (arr[mid] < arr[high]) {
            high = mid
        } else {
            low = mid + 1;
        }
    }
    return arr[low]
}

console.log(findMin([3, 4, 5, 1, 2]))