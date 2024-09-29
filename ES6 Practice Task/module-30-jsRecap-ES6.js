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