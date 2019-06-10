let memorize = {}

function nthFib(n) {
    if (n == 2) {
        return 1
    }
    if (n == 1) {
        return 0
    }

    if (memorize[n]) {
        return memorize[n]
    }
    let num = nthFib(n - 1) + nthFib(n - 2);;
    memorize[n] = num;
    return num;
}

console.log(nthFib(10));