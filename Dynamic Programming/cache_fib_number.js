/*
 * @Author: Venkat Lankalapalli 
 * @Date: 2019-11-26 15:43:46 
 * @Last Modified by: Venkat Lankalapalli
 * @Last Modified time: 2019-11-26 15:44:11
 * 
 * Fibonacci number series
 * Time Complexity : O(2^N)
 * Space Complexity: O(N)
 */

function fib(n) {
    if (n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2);
}




/*
* Memoization fibonacci number series
* Time Complexity : O(N)
* Space Complexity: O(N)
*/
function memFib(n) {
    let mem = {};
    function fib(n, m) {
        if (m[n]) return m[n];
        if (n <= 1) return n;
        m[n] = fib(n - 1, m) + fib(n - 2, m);
        return m[n]
    }
    return fib(n, mem);
}