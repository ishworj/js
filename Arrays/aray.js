// Arrays - non primitive - mutable - fixed -

// DEcleration
let arr = Array.of(1, 2, 3);

// access
// console.log(arr[-1])                                     at   vs []
// console.log(arr.at(-1))

// Method	Description
// push()	Add to end
// pop()	Remove from end
// unshift()	Add to start
// shift()	Remove from start

// // splice()	Add/remove from specific index
// let fruits = ["apple", "banana", "cherry"];
// fruits.splice(1, 2, "orange", "grape"); // At index 1, remove 1 item and add "orange" and "grape"
// console.log(fruits); // ["apple", "orange", "grape", "cherry"]

// slice(1,2)	Return part of array (no modify) -- shallow copy
// concat()	Combine arrays

// // join()	Join elements into a string
// let fruits = ["apple", "banana", "cherry"];
// let result = fruits.join(", ");
// console.log(result); // "apple, banana, cherry"

// indexOf()	Find index of value
// includes()	Check if value exists
// reverse()	Reverse array in place

// sort()	Sort array
// let numbers = [3, 1, 4, 2];
// numbers.sort((a, b) => a - b); // Sorting numbers in ascending order
// console.log(numbers); // [1, 2, 3, 4]

// reduce()	Return single value from all items

// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 0); // Accumulator starts at 0
// console.log(sum); // 10

// findIndex()	Index of first match

// find vs fileter     first one   and all
