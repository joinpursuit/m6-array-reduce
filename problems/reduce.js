const bigOrder = require('../data/order.js')

const firstOrder = [
 .2, '♇♇7' , 3, '4', '♇♇1.8'
]

const hackedOrder = [
 20, -10 , 3, -46, 7
]

/**
 * Takes in an array of numbers/strings and returns an array of all numbers.
 * @param {Array} items
 * @returns {numbers[]} All values are numbers in an array
 * Must use map
 */
const convertToNums = () => {

}

/**
 * Takes in an array of numbers and returns an array of all numbers multiplied by a conversion rate, by default 20.
 * @param {Array} numbers
 * @returns {numbers[]} All values are numbers in an array
 * Must use map
 */

const convertToDollars = () => {

}

/**
 * Takes in an array of numbers and returns the sum of the values plus 10 (for shipping), by default.
 * @param {Array} numbers
 * @returns {numbers[]} All values are numbers in an array
 * Must use reduce
 */
const totalCart = () => {

}

/**
 * Takes in an array of objects with property `price` which need to be converted to numbers.
 * @param {Array} objects
 * @returns {numbers[]} All values are numbers in an array
 * Must use map
 */
const getPrices = () => {

}

/**
 * Takes in an array of Objects with price properties and sums them.
 * add 10, by default, to the total for shipping
 * @param {Array} objects
 * @returns {numbers[]} All values are numbers in an array
 * Must use reduce
 */

const bigCartTotal = () => {


}

/**
 * Takes in an array of numbers and sums them. If the number
 * is negative, multiply it by 5 before summing it
 * @param {Array} objects
 * @returns {numbers[]} All values are numbers in an array
 * Must use reduce
 */

const dontHackCats = () => {


}


module.exports = {
  convertToNums,
  convertToDollars,
  totalCart,
  bigCartTotal,
  getPrices
}
