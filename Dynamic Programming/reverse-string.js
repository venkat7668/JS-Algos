function reverseString(str) {
    if (str == '') {
        return '';
    }

    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));