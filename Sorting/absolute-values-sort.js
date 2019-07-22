/**
 * @author Venkat Lankalapalli
 * @email venkat7668[@]gmail.com
 * @create date 2019-07-03 11:46:31
 * @modify date 2019-07-03 11:46:31
 * @desc This algorithm sorts based on absolute values.
 *       if two absolute values are same then negative value put first.
 */


function absoluteSort(arr) {
    let len = arr.length;
    while (len) {
        for (let i = 1; i < len; i++) {
            if ((Math.abs(arr[i]) < Math.abs(arr[i - 1])) || (Math.abs(arr[i]) == Math.abs(arr[i - 1]) && arr[i] < arr[i - 1])) {
                swap(arr, i, i - 1);
            }
        }
        len--;
    }

    return arr;
}

function swap(ar, i, j) {
    [ar[i], ar[j]] = [ar[j], ar[i]]
}

console.log(absoluteSort([1, 10, 2, 0, -2, -3, 3, -1, -2, -10, -1, -1]));