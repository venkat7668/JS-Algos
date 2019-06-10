function convertIntToRomanNum(val) {
    let numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numeral = '';
    let i = 0;
    while (val > 0) {
        if (val - values[i] >= 0) {
            numeral += numerals[i];
            val -= values[i];
        } else {
            i++
        }
    }
    return numeral;

}

console.log(convertIntToRomanNum(205))
