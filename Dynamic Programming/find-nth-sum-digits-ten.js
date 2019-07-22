/**
 * @author Venkat Lankalapalli
 * @email venkat7668[@]gmail.com
 * @create date 2019-07-05 16:51:55
 * @modify date 2019-07-05 16:51:55
 * @desc A number is considered perfect if its digits sum up to exactly 10.
         Given a positive integer n, return the n-th perfect number.
         For example, given 1, you should return 19. Given 2, you should return 28.

         This problem was asked by Microsoft.
 */

function findNth(n) {

    let nthElement = 19 + (n - 1) * 9;
    let outliersCount = Math.floor(Math.log10(nthElement)) - 1;

    nthElement += 9*outliersCount;
    return nthElement;


}

//for (let i = 1; i < 100; i++) {
console.log(findNth(111));
//}

