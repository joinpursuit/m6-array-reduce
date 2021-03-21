const { describe, test, expect } = require("@jest/globals")
const bigOrder = require('../data/order.js')

// Run solutions
// const {
//   convertToNums,
//   convertToDollars,
//   totalCart,
//   getPrices,
//   bigCartTotal,
//   dontHackCats
// } = require('../problems/reduce_solutions.js')

// Load student activity file
const {
  convertToNums,
  convertToDollars,
  totalCart,
  getPrices,
  bigCartTotal,
  dontHackCats
} = require('../problems/reduce.js')


describe("convertToNums", () => {
  test("Converts prices to numbers", () => {
    expect(convertToNums([.2, '♇♇7' , 3, '4', '♇♇1.8'
  ])).toEqual([ 0.2, 7, 3, 4, 1.8 ])
 })
 test("Uses map", () => {
   const funcString = convertToNums.toString()
   expect(funcString.includes("map")).toBe(true)
 })
})

describe("convertToDollars", () => {
  test("Converts prices to dollars at current rate of 20", () => {
    expect(convertToDollars([ 0.2, 7, 3, 4, 1.8 ], 20)).toEqual([ 4, 140, 60, 80, 36 ])
 })
 test("Converts prices to dollars at a different rate", () => {
   expect(convertToDollars([ 0.2, 7, 3, 4, 1.8 ], 200)).toEqual([ 40, 1400, 600, 800, 360 ])
})
 test("Uses map", () => {
   const funcString = convertToDollars.toString()
   expect(funcString.includes("map")).toBe(true)
 })
})

describe("totalCart", () => {
  test("Totals dollar values with $10 shipping", () => {
    expect(totalCart([ 4, 140, 60, 80, 36 ], 10)).toEqual(330)
 })
 test("Totals dollar values with other shipping amount", () => {
   expect(totalCart( [4, 140, 60, 80, 36 ], 100)).toEqual(420)
})
 test("Uses reduce", () => {
   const funcString = totalCart.toString()
   expect(funcString.includes("reduce")).toBe(true)
 })
})

describe("getPrices", () => {
  test("Extract prices from big order array of objects", () => {
    expect(getPrices(bigOrder)).toEqual(   [
      1.1,   2.02, '♇♇7',
      '♇♇3', 4,    '♇♇5',
      '♇♇7', 6,    '6',
      '♇♇7', 8.8,  '91.97',
      10.1
    ])
  })
 test("Uses map", () => {
   const funcString = getPrices.toString()
   expect(funcString.includes("map")).toBe(true)
 })
})

describe("bigCartTotal", () => {
  test("Totals dollar values with $10 shipping", () => {
    expect(totalCart(
      [
         22, 40.4,    140,
         60,   80,    100,
        140,  120,    120,
        140,  176, 1839.4,
        202
      ]
      , 10)).toEqual(3189.8)
 })
 test("Uses reduce", () => {
   const funcString = totalCart.toString()
   expect(funcString.includes("reduce")).toBe(true)
 })
})

describe("dontHackCats", () => {
  test("Sums the prices, if the price is negative multiply by five and add to the total, plus 400 for shipping", () => {
    expect(dontHackCats([
     20, -10 , 3, -46, 7
   ], 400)).toEqual(6000)
 })
 test("Uses reduce", () => {
   const funcString = dontHackCats.toString()
   expect(funcString.includes("reduce")).toBe(true)
 })
})
