function memFib(num) {
        let cache = {};
        
        return (function fib(n) {
            //cache check
            if (cache[n]) {
                return cache[n]
            }
            //base case
            if (n <= 3) {
                return n;
            }
            //Recursion
            let result = fib(n - 1) + fib(n - 2);
            //store in cache
            cache[n] = result;

            return result;
        })(num)
}

console.log(memFib(5));