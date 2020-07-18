// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Option 1
function reverse1(str) {
    return str.split('').reverse().join('');
}

// Option 2
function reverse2(str) {
    let res = '';
    for(let char = str.length - 1; char >= 0; char--) {
        res += str[char];
    }
    return res;
}

// option 3
function reverse3(str) {
    let resArr = [];
    for(let char of str) {
        resArr.unshift(char);
    }
    return resArr.join('');
}

module.exports = reverse3;
