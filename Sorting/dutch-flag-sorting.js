/* This algorithm sorts 0 1 2 numbers */

function sort012(arr){
    let low = -1;
    let mid = 0;
    let high = arr.length;
    while(mid < high){
        if(arr[mid] == 0){
            low++;
            swap(arr, low, mid);
            mid++
        }else if(arr[mid] == 1){
            mid++;
        }else{
            high--;
            swap(arr, mid, high);
        }
    }
    return arr;
}

function swap(arr, i, j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
}

console.log(sort012([2,1,0,2,1,0,2,1,0,2,1,0,2,1,0]));