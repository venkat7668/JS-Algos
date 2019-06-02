//util
function rng(min, max) {
    return Math.floor(Math.random() * max - min) + min;
}

function shuffle(deck) {
    let len = deck.length;
    for (let i = 0; i < len; i++) {
        let _rng = rng(i, len);
        let card = deck.splice(_rng, 1)
        deck.push(card[0]);
    }
    return deck;
}
/* version 2 */
function shuffle_v2(arr) {
    //for (let i = arr.length - 1; i > 0; i--) {
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * i + 1);
        [arr[j], arr[i]] = [arr[i], arr[j]]
    }

    return arr;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7]));
console.log(shuffle_v2([1, 2, 3, 4, 5, 6, 7]));