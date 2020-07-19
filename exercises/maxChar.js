// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let char = '';
    let counter = 0;
    const freq = {};
    for(let letter of str) {
        if(freq[letter]) {
            freq[letter]++;
        } else {
            freq[letter] = 1;
        }
    }
    for(let key in freq) {
        if(freq[key] > counter) {
            counter = freq[key];
            char = key;
        }
    }
    return char;
}

module.exports = maxChar;
