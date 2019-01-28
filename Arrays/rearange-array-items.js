/* 
  Rearrange Array items like [min,max,2nd min, 2nd max,.... n min, n max]
  @arr: Sorted Array
*/

exports.rearrangeArrayItems = function (arr) {
    const len = arr.length;
    let i = 0;
    let j = len - 1;
    let result = [];
    const half = len / 2 >> 0; //floor in case of dismal values

    while (i < half || j > half) {
        if (i != j) { // last item appears twise in result
            result.push(arr[i]);
            result.push(arr[j]);
        }
        i++;
        j--;
    }
    result.push(arr[half]); // add last item 

    return result;
}