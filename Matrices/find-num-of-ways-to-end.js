function numOfPaths(m, n) {
    if (n == 1 || m == 1) {
        return 1
    }
    return numOfPaths(m - 1, n) + numOfPaths(m, n - 1);
}

console.log(numOfPaths(3,3));