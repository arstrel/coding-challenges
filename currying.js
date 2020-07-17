const cook = ingredient1 => ingredient2 => ingredient3 => ingredient4 => `Cooked ${ingredient1} and ${ingredient2} together with ${ingredient3} on top of ${ingredient4}`

const result = cook('brocolli')('carrots')('buckweed')('salad leaf')

console.log(result)

const mail = intro => who => why => emoji => `${intro} ${who} I am contacting you bacause ${why}. Cheers, ${emoji}`

const mr = mail('Mr')
const toJoggins = mr('Joggins,')


console.log(toJoggins('you are great')(';))'))
console.log(toJoggins('you are clown')('wahhahah'))
console.log(toJoggins('I just want to bug you')('Bro'))

const msRodrigez = mail('Ms')('Rodrigez,')

console.log(msRodrigez('are you familliar with the concept of currying in JS')('??'))

