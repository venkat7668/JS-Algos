/* asked by Amazon in online test 
 * There are a  total n piles of products
 * The number of products in each pile is repersented by the
 * array numProducts
 * select any subarray form the array numProducts and pick up
 * products from that such that the number of products you pick
 * from the (i+1)th pile for all indices i of the subarray
 * Example
 * [7,4,5,2,6,5]
 * if you choose subarray (0,2) = [2,3,5]
 * if you choose subarray (2,5) = [1,2,4,5]
 * 
 * Pick (i-1)th pile products less/max products of ith
*/
function findMaxProducts(ar) {
    let len = ar.length;
    let cacheAr = [ar[len - 1]]
    let countAr = [ar[len - 1]]
    let max = 0
    for (let i = len - 2; i >= 0; i--) {
        //check last count number with current element
        if (countAr[0] > ar[i]) {
            max = cacheAr[0] + ar[i]
            countAr.unshift(ar[i])
        } else {
            //right element is lesser then left element
            //Check for max cacheAr[0] + last count -1 or current element
            if (cacheAr[0] + countAr[0] - 1 > ar[i]) {
                max = cacheAr[0] + countAr[0] - 1
                countAr.unshift(countAr[0] - 1)
            } else {
                max = ar[i];
                countAr.unshift(ar[i])
            }
        }
        cacheAr.unshift(max)
    }
    return cacheAr[0]
}

console.log(findMaxProducts([70, 7, 2, 5, 35, 6, 5, 50]));
//console.log(findMaxProducts([1, 2, 3, 4, 5]))