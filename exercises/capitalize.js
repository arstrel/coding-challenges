// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// option 1
// with array, capitatizing in place
function capitalize1(str) {
    const strArr = str.split('');
    strArr[0] = strArr[0].toUpperCase();
    for (let i = 1; i < strArr.length; i++) {
      if (strArr[i - 1] == ' ') {
        strArr[i] = strArr[i].toUpperCase();
      }
    }
    return strArr.join('');
  }
  
  // option 2
  // with array .map and .substr
  function capitalize2(str) {
    const strArr = str.split(' ');
    return strArr
      .map((word) => `${word[0].toUpperCase()}${word.substr(1)}`)
      .join(' ');
  }
  
  // option 3
  // String.prototype.substr and .slice are pretty much the same
  // with some differences in particular cases
  function capitalize3(str) {
    const words = [];
    const original = str.split(' ');
    original.forEach((word) => {
      const temp = `${word[0].toUpperCase()}${word.slice(1)}`;
      words.push(temp);
    });
    return words.join(' ');
  }
  
  // option 4
  // composing a result string without an array
  function capitalize4(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if(!str[i - 1] || str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
  }
  
  module.exports = capitalize4;
  