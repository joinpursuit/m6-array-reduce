# Petsy 2.0

With the success of Petsy, a new version is launching that accepts the latest cryptocurrency: PlutoPluto Coin, represented by the symbol `♇♇`. 1 PlutoPluto Coin is worth $20. Therefore if an item is ♇♇4.4 it is actually worth $88.



## Getting Started

* Fork this repo
* `git clone` the forked repository
* `cd` to the directory where you cloned it
* `npm install` to install dependencies
*  Do your work in the `problems/reduce.js` file.
* `npm test` to run the tests

> *Note*: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines
  * When finished, commit and push your work.
  * Make a pull request on GitHub.

## Activity

**Note:** Solutions available in the file `problems/reduce_solutions.js`

A first order has come in.
```js
const firstOrder = [
 .2, '♇♇7' , 3, '4', '♇♇1.8'
]

// 4 + 140 + 60 + 80 + 36 = 320
// + 10 shipping: total = 330
```


You'll need to convert the items from cryptocurrency into numbers that are in the dollar value.

Using what you've learned in class

- Make a new array of values converted to numbers in dollar values
- sum the shopping cart total
- flat rate shipping is now 10 instead of 5

- Instead of just the prices, we have the entire shopping cart object, write a function to extract just the prices

- Write another function called `bigCartTotal` to take the `bigOrder` array and sum the prices (converted to dollars) and add $10 shipping

- The hacker group hackrDogz managed put negative values in to try to make us pay them for buying our stuff! Make the number positive and charge them 5x the original price! Just charge them the regular price if it is a positive number. Don't forget to charge $400 for shipping.


## BONUS

**Note:** Solutions available in the file `bonus/reduce_solutions.js`

There is no starter code/file for this

### Most Pricy
- Find the priciest item from the big array
 - take the `firstOrder` and use the `convertToNums` function
 - then use the `convertToDollars`
 - then use the converted array with `.reduce()` in order to find the priciest item. [hint](https://thecodebarbarian.com/javascript-reduce-in-5-examples.html)

### Buy One Get One Half Sales

**Note:** Solutions available in the file `bonus/reduce_solutions.js`

- Buy one get one half off. For every item under $50, charge the buyer 1.5 so they would get two for the price of 1.5! The total should be 338

- Buy 2 get one free! Using the bigOrder array, give away on the most cheap items for free!

### Bonus Bonus

- Item Count - there are duplicates of several items in `bigOrder` - make an array of objects that sets the `itemName` as the key and then a numeric value for each time that item appears in the array

- Group by - Organize the data to be grouped by the `designedBy` property

[Hint](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### Bonus Bonus Bonus

**Note:** These are extra ideas I had, but did not build solutions for them.

-Write a new function that will find the average price of the order

[Hint]( https://www.freecodecamp.org/news/reduce-f47a7da511a9/)

### Bonus BONUS Bonus BONUS

**Note:** These are extra ideas I had, but did not build solutions for them.

Refactor the code to chain:
https://medium.com/technofunnel/javascript-function-chaining-8b2fbef76f7f

- Work through the examples [here](https://medium.com/swlh/javascript-reduce-with-examples-570f1b51e854)
