function mergeIntervals(arr) {
    arr = arr.sort((a, b) => a.startTime - b.startTime);
    let result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let top = result[result.length - 1];
        if (top.endTime < arr[i].startTime) {
            top.endTime = arr[i].endTime;
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

var meetings = [{
    startTime: 0,
    endTime: 1
}, {
    startTime: 3,
    endTime: 5
}, {
    startTime: 4,
    endTime: 8
}, {
    startTime: 10,
    endTime: 12
}, {
    startTime: 9,
    endTime: 10
}];

console.log(mergeIntervals(meetings));
