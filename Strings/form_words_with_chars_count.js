/*
 * Input: words = ["cat","bt","hat","tree"], chars = "atach"
 * Output: 6
 * Explanation: 
 * The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6
*/

function countTheChars(words, chars) {
    let count = 0;
    let cache = {}
    for (let i = 0; i < chars.length; i++) {
        if (cache[chars[i]]) {
            cache[chars[i]]++;
        } else {
            cache[chars[i]] = 1;
        }
    }
    for (let word = 0; word < words.length; word++) {
        let flag = true;
        for (let char = 0; char < words[word].length; char++) {
            if ((cache[words[word][char]] || 0) < countChar(words[word], words[word][char])) {
                flag = false;
                break
            }
        }
        if (flag) {
            count += words[word].length;
        }
    }

    return count;
}

function countChar(str, char) {
    let cache = {}
    for (let i = 0; i < str.length; i++) {
        if (cache[str[i]]) {
            cache[str[i]]++;
        } else {
            cache[str[i]] = 1;
        }
    }
    return cache[char] || 0;
}

console.log(countTheChars(["cat", "bt", "hat", "tree"], "atach"))