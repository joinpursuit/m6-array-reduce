const bigOrder = require('../data/order.js')

const firstOrder = [
 .2, '♇♇7' , 3, '4', '♇♇1.8'
]

const hackedOrder = [
 20, -10 , 3, -46, 7
]

// required previous functions

const convertToNums = (order) => {
  return order.map(currentValue => {
    if(isNaN(currentValue)) {
      currentValue = currentValue.substring(2)
    }
    return parseFloat(currentValue)
  })
}

const convertToDollars = (prices , conversionRate = 20) => {
  return prices.map(price =>  price * conversionRate)
}

const getPrices = (items) => {
  return items.map(item => item.price)
}


/**
 * Takes in an array of objects with property `price` which need to be
 * converted to numbers and then finds the max value
 */

const priciestItem = (arr) => {
  arr = convertToNums(arr)
  arr = convertToDollars(arr)
  return arr.reduce((max, cv) => {
    if (cv > max) {
      return cv
    } else {
      return max
    }
  })
}

// console.log(priciestItem(firstOrder)); // should be 140
// console.log('big price', priciestItem(getPrices(bigOrder))); // 1839.4

/**
 * Takes in an array of objects with property `price` which need to be
 * converted to numbers and then find the sum when items that are under 50 are mulitiplied by 1.5, simulating buying a second item for 50% off.
 */
const bogoUnderFifty = (arr) => {
  arr = convertToNums(arr)
  arr = convertToDollars(arr)
  return arr.reduce((acc, cv) => {
    if (cv < 50) {
      return acc + cv * 1.5
    } else {
      return acc + cv
    }
  })
}

console.log(bogoUnderFifty(firstOrder)); // should be 338

/**
 * Takes in an array of objects with property `price` which need to be
 * converted to numbers and then find the sum when every third cheapest item
 * is free
 */

const bogoThird = (arr) => {
  arr = getPrices(arr)
  arr = convertToNums(arr)
  arr = convertToDollars(arr)
  arr.sort((a,b) =>  b - a)

  let free =  Math.floor(arr.length/3)
  return arr.reduce((acc, cv, index) => {
    if (index > arr.length - free - 1) {
      return acc
    } else {
      return acc + cv
    }
  }, 0)
} // 3179.8
// discount 2977.4


// const testPrices =  [
//   {price: 1},
//   {price: 1},
//   {price: 1},
//   {price: 1},
//   {price: 1},
//   {price: 1},
// ] // 80

// console.log(bogoThird(bigOrder));
// // console.log(bogoThird(testPrices));


/**
 * Takes in an array of objects
 * and then find the number of each item
 */

const itemCount = bigOrder.reduce((allItems, item) => {
  if (item.itemName in allItems) {
    allItems[item.itemName]++
  } else {
    allItems[item.itemName] = 1
  }
  return allItems
}, {})

// console.log(itemCount);


/**
 * Takes in an array of objects with property `designedBy`
 * Shapes a new array that groups each item by designer
 */

 const groupByDesigner = bigOrder.reduce((acc, obj) => {
   let key = obj.designedBy
   if(!acc[key]){
     acc[key] = []
   }
   acc[key].push(obj)
   return acc
})

// console.log(groupByDesigner)
