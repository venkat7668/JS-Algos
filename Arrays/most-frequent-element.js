function getMostFrequentElement(arr) {
    let countMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (countMap[arr[i]]) {
            countMap[arr[i]]++
        } else {
            countMap[arr[i]] = 1;
        }
    }

    let count = 0;
    let prop;
    for (let key in countMap) {
        if (countMap[key] > count) {
            count = countMap[key];
            prop = key;
        }
    }
    return prop;
}

//console.log(getMostFrequentElement([1,2,3,5,2,3]))
exports.getMostFrequentElement = getMostFrequentElement;