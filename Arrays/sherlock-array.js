/*
 * Problem: find an element of the array such that the sum of all elements
 *          to the left is equal to the sum of all elements to the right.
 *
 * Solution: 
 * 
 * arr = [5,6,8,11]
 * 8 is between two subarrays that sum to 11
 * 
 * ____   ____             __            __     .__   
 * \   \ /   /____   ____ |  | _______ _/  |_   |  |  
 *  \   Y   // __ \ /    \|  |/ /\__  \\   __\  |  |  
 *   \     /\  ___/|   |  \    <  / __ \|  |    |  |__
 *    \___/  \___  >___|  /__|_ \(____  /__| /\ |____/
 *               \/     \/     \/     \/     \/       
 */

function findElementBetweenEqualSumElements(arr) {
    const s = sum(arr);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (2 * count == s - arr[i]) {
            return arr[i]
        }
        count += arr[i]
    }
    return -1
}

function sum(arr) {
    return arr.reduce((i, n) => n + i, 0)
}