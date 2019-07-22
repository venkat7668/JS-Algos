function nthFib(n) {
    if (n <= 3) {
        return n
    }

    return nthFib(n - 1) + nthFib(n - 2);
}

console.log(nthFib(5));