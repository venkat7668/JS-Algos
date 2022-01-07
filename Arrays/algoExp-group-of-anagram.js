function groupAnagrams(words) {
    /*
     * input : list of a anagrams
     * output: list of a group/list anagrams
     * 
     * input  : ['rat', 'tar', 'art', 'cow', 'ocw', 'woc', 'elbow', 'below']
     * output : [ 
     *   [ 'rat', 'tar', 'art' ],
     *   [ 'cow', 'ocw', 'woc' ],
     *   [ 'elbow', 'below' ] 
     * ]
     * 
     * Solution:
     * Create new array with sorted chars of words
     * Create a hash table and store anagram of a list
     * Loop through the hash table and create a list of group anagrams
     * 
     * Time Complexity  : 
     * Space Complexity :
     * 
     */

    let hashTbl = {}
    let result = []
    words.forEach(word => {
        sortedCharsWord = sortChars(word)
        if (hashTbl[sortedCharsWord]) {
            hashTbl[sortedCharsWord].push(word)
        } else {
            hashTbl[sortedCharsWord] = [word]
        }
    });

    for (anagram in hashTbl) {
        result.push(hashTbl[anagram])
    }

    return result;
}

/* util function */
function sortChars(word) {
    return word.split('').sort().join('')
}

/* test case */

let testData1 = ['rat', 'tar', 'art', 'cow', 'ocw', 'woc', 'elbow', 'below']
console.log(groupAnagrams(testData1))