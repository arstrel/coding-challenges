// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    for(let i=1; i<strArr.length; i++) {
        if(strArr[i-1] == ' ') {
            strArr[i] = strArr[i].toUpperCase();
        }
    }
    return strArr.join('');
}

module.exports = capitalize;
