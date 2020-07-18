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

// option 4
function reverse4(str) {
    const strArr = str.split('');
    return strArr.reduce((acc, val) => val + acc, '');
}

module.exports = reverse4;
