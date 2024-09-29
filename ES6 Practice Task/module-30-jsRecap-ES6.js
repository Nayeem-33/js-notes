// Practice Problem 1.1
const multi = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multi(2, 5, 6));

// Practice Problem 1.2
const sentence = `I am a Web Developer
I love to code.
I love to eat Biriani`;
// console.log(sentence);

// Practice Problem 1.3
const add = (num1, num2 = 5) => num1 + num2;
// console.log(add(4));

// Practice Problem 2
const checkName = (friendArr) => {
  let evenFriends = [];
  for (let friend of friendArr) {
    if (friend.length % 2 === 0) {
      evenFriends.push(friend);
    }
  }
  return evenFriends;
};

const friends = [
  "Hashem",
  "Rahat",
  "Jashim",
  "Jhankar",
  "Maha",
  "Murad",
  "Jamil",
  "Arzu",
  "Sayem",
  "Maruf",
  "Jaman",
  "Ahad",
];
// console.log(checkName(friends));

// Practice Problem 3
const avgSqrt = (numArr) => {
  let sqrtArr = [];
  for (num of numArr) {
    let sqrt = num * num;
    sqrtArr.push(sqrt);
  }
  let sum = 0;
  for (num of sqrtArr) {
    sum = sum + num;
  }
  return sum / sqrtArr.length;
};

let numberArr = [4, 4, 4, 4, 4, 4, 4];
// console.log(avgSqrt(numberArr));

// Practice Problem 4
const maxOfArr = (arr1, arr2) => {
  let arrAdd = [...arr1, ...arr2];
  return Math.max(...arrAdd);
};
let arr1 = [5, 18, 6, 2, 3, 4];
let arr2 = [7, 3, 9, 5, 2, 4, 8, 12];
console.log(maxOfArr(arr1, arr2));

// Here’s a comparison of .forEach() vs .map() in a table format, along with examples for each:

// ! Feature	.forEach()	.map()
// .forEach() Purpose =	Executes a function on each array element for side effects (e.g., logging, modifying variables).
// .map() Purpose =	Transforms each element in an array and returns a new array.
// .forEach() Return value	Returns undefined (does not return anything).	
// .map() Returns a new array with transformed elements.
// .forEach() Use case	Used for side effects (logging, updating DOM, modifying external state).
// .map() Used when you want to transform the array into a new one.
// .forEach() does not Mutates original array
// .map() does not Mutates original array
// .forEach() Typical use	Iterating without creating a new array.
// .map() Creating a new array based on original elements.
// .forEach() is not chainable (since it returns undefined).	
// .map() is chainable (because it returns a new array).
// .forEach() is ideal for performing actions like logging or side effects, but it doesn't return a value.
// .map() is great when you want to transform data and get a new array, making it useful for functional programming approaches.

// Example of .forEach()
const numbers = [1, 2, 3, 4];
let sum = 0;

// Using .forEach to log and modify sum
numbers.forEach(num => {
  console.log(num); // Side effect: logging
  sum += num;       // Side effect: updating sum
});

console.log('Sum:', sum);  // Output: 10

// Example of .map()
const numbers = [1, 2, 3, 4];

// Using .map to transform numbers
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);  // Output: [2, 4, 6, 8]



// Make this odd array even
let oddArr = [5, 7, 13, 11, 19, 25]

// For Loop
let evenArrFor = []

for (num of oddArr) {
    evenArrFor.push(num + 1)
}

// console.log("With For Loop:  ", evenArrFor)

// MAP
let evenArr = oddArr.map(arr => arr + 1)
// console.log("With array map: ", evenArr)


// ! Filter vs Find the array
// .filter() Returns an array of all elements that pass the given condition.
// .find() Returns the first element that passes the given condition.
// .filter() Returns a new array of matching elements.
// .find() Returns the first matching element, or undefined if no match is found.
// .filter() Array (can be empty if no match).
// .find() A single element (or undefined if no match).
// .filter() Use when you want multiple results.
// .find() Use when you want to find just one result.
// .filter() Returns an empty array if no elements pass the test.
// .find() Returns undefined if no element passes the test.
// .filter() returns all elements that satisfy the condition and gives you a new array. It’s useful when you want to retrieve multiple items.
// .find() stops once it finds the first element that satisfies the condition, returning just that element, and it’s useful when you need only a single result.
// .filter(): Use this when you expect multiple results, such as finding all users over a certain age.
// .find(): Use this when you only need the first occurrence of something, such as finding the first user over a certain age.


const numbers = [1, 2, 3, 4, 5, 6];

// Example of .filter()
// Using .filter to get all even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  // Output: [2, 4, 6]


// Example of .find()
// Using .find to get the first even number
const firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven);  // Output: 2
