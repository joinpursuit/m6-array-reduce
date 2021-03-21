# JavaScript Reduce Array Method

## Learing Objectives
 - Review array methods
 - Learn how to use array method `.reduce()`
 - Practice breaking a problem into smaller pieces and solving each piece



## Prerequisites

- [JavaScript Fundamentals](https://github.com/joinpursuit/Pursuit-Core-Web/blob/master/fundamentals/README.md)

- pre-reading/pre-work, review Lesson 13, Array Methods & Callbacks

Arrays have a number of helpful methods. We've already covered methods like:
- `.every()`
- `.forEach()`
- `.map()`

## Getting started

- Go to your `code` folder
- `touch reduce_lesson.js`

Let's learn a new method called `.reduce()` to help us solve a problem.

Imagine we are working as back-end developers for a new company called Petsy. Petsy focuses on handmade arts and crafts made by cats and other animals. We are part of the team that helps make sure online orders are fulfilled.

We are on the receiving end of prices of the items in the shopping cart. Our job is to sum the total and add $5.00 for flat rate shipping.

Unfortunately, the front-end work done was rushed and our values in the shopping cart can come in as numbers, strings or strings with a $ in front of them.

Let's look at an example shopping shoppingCart

## Part 1

- copy the following code into your `reduce_lesson.js` file

```js
const shoppingCart = [
  1,  '2.02', '$3',
  '4',  5, '6.0',
  '7',  '$8', '9',
  '$10.10'
]
```

The total of this shopping cart should be $55.12. With $5 shipping, our total would be $60.12.

Let's write some code to check whether `every` value is a number.

First let's write a function that checks whether a value is a number

```js
const isNum = (num) => {
  typeof num === "number"
}
```

Let's test it!

```js
console.log(isNum(5))
```

**Uh oh** - We got false!? Can anyone spot what we did wrong?

<details><summary>Solution</summary>

We forgot to `return` a value

```js
const isNum = (num) => {
  return typeof num === "number"
}
```

</details>


Let's test it again

```js
console.log(isNum(5)) // true
console.log(isNum('5')) // false
```

Great! Now we want to check if `every` value in our shoppingCart is a number.

Recall [`.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) is an array method that takes a `callback` function as a mandatory argument. It will iterate over an array and check every value for something. In our case we want to check if every value is a number.


```js
const isAllNums = shoppingCart.every(isNum)

console.log(isAllNums) // false
```

As we predicted, not every value is a number.

So let's write some code that will make a new array with proper number values.

We'll use `.forEach()`. [`.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) is an array method that takes a callback as a mandatory argument.

Array method
```js
let convertToNums = shoppingCart.forEach()
```
Takes a callback as an argument
```js
let convertToNums = shoppingCart.forEach(() => {})
```

The callback needs at least one argument, it will be the `current value` that is being iterated over.
```js
let convertToNums = shoppingCart.forEach((currentValue) => {
  return parseInt(currentValue)
})

console.log(convertToNums)
```

**Gotcha!** - [`.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)  and [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) are very similar functions. The difference is that `.forEach()`  does **NOT** return a new array, while `.map()`will return a new array.

Let's swap out that `.forEach()` for a `.map()`

```js
let convertToNums = shoppingCart.map((currentValue) => {
  return parseInt(currentValue)
})

console.log(convertToNums)
```

Super! We've made progress. Some of our values have been converted to numbers. But we have two problems:
- Only the full dollar amount and not the cents are being converted
- Some values, notably, the ones that start with a `$` are being converted to `NaN` instead of a number.

Let's use [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) instead of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt). Can anyone explain why? If you are not sure what the difference or have forgotten it, you can always google it.  

```js
let convertToNums = shoppingCart.map((currentValue) => {
  return parseFloat(currentValue)
})

console.log(convertToNums)
```

Great! But what about those `NaN` values? `if` the  value [`is NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN), then we must remove the `$` from the beginning of the `string` and keep the remaining characters. We can do this with the [`.substring()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) method. Then, we can convert our string to a number.



```js
let convertToNums = shoppingCart.map((currentValue) => {
  if(isNaN(currentValue)) {
    currentValue = currentValue.substring(1)
  }
  return parseFloat(currentValue)
})

console.log(convertToNums)
```

Currently, we can use a `console.log()` and scan the array visually to be sure our values are all numbers. But Petsy is going to be huge! We'll have shopping carts with hundreds of values. As programmers, we always want to write code to automate as much as possible and part of that is writing code to check that our data is what we expect.

Let's test if all our values in our `convertToNums` array are now numbers. We can reuse the function we wrote before and use it with the `.every()` method on our new array.

```js
console.log(convertToNums.every(isNum))
```

Nice!

Now we want to sum up all the values and add $5 for shipping.

We have an array method called [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) that will make this easy to handle.

`.reduce()` can be a bit intimidating because it takes a bit more set up than our other array methods.

But with all our review and practice we are ready to start using it!

It can also be challenging to learn to write code from the outside in. Most of us try two create things from left to right because we are used to reading and writing words.

So let's break it down, from outside in.

`.reduce()` is a function

```js
const total = convertToNums.reduce()
```

That takes two arguments. A callback as the first argument and a starting value as the second.

Because we always want to add $5 shipping our starting value will be 5.

Having another argument after a callback looks a little odd, it can take a bit to get used to it.

```js
convertToNums.reduce(() => {}, 5)
```

Now that we've set that up, we want to finish setting up our callback function.

The callback will take two arguments. The second value is familiar to us from using methods like `.forEach()` and `.map()` - it will be the `currentValue`.

The new argument is often referred to as the `accumulator`. For the problem we are trying to solve, let's just call it `sum`, since that will help us talk through this solution in terms that feel more familiar.

```js
convertToNums.reduce((sum, currentValue) => {


}, 5)
```

If we were to write this as a `for` loop, we'd write something like this


Every time we go through the loop we update the value of `sum` and `currentValue`

```js

let sum = 5
for (let i = 0; i < convertToNums.length; i++) {
  let currentValue = convertToNums[i]
  sum = sum + currentValue
}

console.log(sum)
```

We can do the same thing with `.reduce()`, but the code will be a bit shorter and easier to read.


```js
const total = convertToNums.reduce((sum, currentValue) => {
  return sum + currentValue
}, 5)

console.log(total)
```

Just like our `for` loop, we start with a starting `sum` value, which is 5.

Then we add the `currentValue` to the `sum`. Then when we move (iterate) to the next array item, `sum` will be a new value based on its previous value `plus` the previous `currentValue`.

We can always add `console.log`s to help us visualize.


```js
const total = convertToNums.reduce((sum, currentValue) => {
  console.log('====== new iteration ======')
  console.log('current sum is', sum)
  console.log('current currentValue is', currentValue)
  return sum + currentValue
}, 5)

console.log(total)
```

### Part 2

The problem with our shopping cart is that we have just the prices and not any other information. We likely would get an array of objets.

```js
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
```

We can easily upgrade our logic to be able to handle an array of objects.

```js
const ObjTotal = objectCart.reduce((sum, currentValue) => {
  console.log('====== new iteration ======')
  console.log('current sum is', sum)
  console.log('current currentValue is', currentValue.price)
  return sum + currentValue.price

}, 5)

console.log(objTotal)
```

## Activity

[Instructions Here](./activity.md)
