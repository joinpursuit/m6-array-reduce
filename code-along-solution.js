const shoppingCart = [
  1,  '2.02', '$3',
  '4',  5, '6.0',
  '7',  '$8', '9',
  '$10.10'
]

const isNum = (num) => {
  return typeof num === "number"
}

// console.log(isNum(5)) // true
// console.log(isNum('5')) // false

const allNums = shoppingCart.every(isNum)

// console.log(allNums) // false

let convertToNums = shoppingCart.map((currentValue) => {
  if(isNaN(currentValue)) {
    currentValue = currentValue.substring(1)
  }
  return parseFloat(currentValue)
})

// console.log(convertToNums)

// console.log(convertToNums.every(isNum))

// let sum = 5
// for (let i = 0; i < convertedToNums.length; i++) {
//   let currentValue = convertedToNums[i]
//   // long form
//   // sum = sum + currentValue
//   // shorthand
//   sum += currentValue
// }
//
// console.log(sum)


const total = convertToNums.reduce((sum, currentValue) => {
  return sum + currentValue

}, 5)

// console.log(total)

// const total = convertedToNums.reduce((sum, currentValue) => {
//   console.log('====== new iteration ======')
//   console.log('current sum is', sum)
//   console.log('current curretnValue is', currentValue)
//   return sum + currentValue
// }, 5)

// console.log(total)

const objectCart = [
  {
    itemName: 'Chewed Plastic Bag',
    designedBy: 'Mittens',
    price: 1
  },
  {
    itemName: 'Tangled yarn',
    designedBy: 'Patches',
    price: 2.02
  },
  {
    itemName: 'Fur-Lined Track Pants',
    designedBy: 'Fluffy',
    price: 5
  },
]


const objTotal = objectCart.reduce((sum, currentValue) => {
  return sum + currentValue.price

}, 5)

// console.log(objTotal)
