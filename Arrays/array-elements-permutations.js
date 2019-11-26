function permutations(arr, result=[]) {
    if (!arr.length) {
        console.log(result)
    }

    for (let i = 0; i < arr.length; i++) {
        let rem = [...arr.slice(0, i), ...arr.slice(i + 1)];
        permutations(rem, [...result, arr[i]]);
    }
}

permutations([1, 2, 3]);
