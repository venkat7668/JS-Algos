function isSubset(set, subset) {
    if (!subset.length || !set.length) {
        return false;
    }

    let firstElIndex = set.indexOf(subset[0]);
    //first element not found
    if (firstElIndex == -1) {
        return false;
    }

    if (firstElIndex + subset.length > set.length) {
        return false;
    }

    console.log(firstElIndex)
    for (let i = firstElIndex; i < firstElIndex + subset.length; i++) {
        console.log(set[i], subset[i - firstElIndex])
        if (set[i] !== subset[i - firstElIndex]) {
            return false;
        }
    }

    return true;
}

console.log(isSubset([1, 2, 3, 4, 4, 5], [4, 4, 5]))