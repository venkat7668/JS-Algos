var titleToNumber = function(columnTitle) {
    let result = 0
    for (let i = 0; i < columnTitle.length; i++) {
        let charNum = strToNum(columnTitle[i])
        result = result * 26 + charNum
    }
    return result
};

function strToNum(char) {
    return char.toLowerCase().charCodeAt(0) - 96
}

console.log(titleToNumber("mallesh"));