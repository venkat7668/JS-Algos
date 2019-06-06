function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num == 2) {
        return true
    }
    if (num % 2 == 0) {
        return false;
    }

    let sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i+=2) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

for(var i=0; i<20; i++){
    console.log(`${i} isPrime ${isPrime(i)}`);
}