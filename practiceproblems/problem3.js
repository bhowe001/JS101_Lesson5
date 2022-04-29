// JS 101 
// Lesson 5
// Practice Problem 3


// Array 1
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

console.log(arr1[2][1][3]); // => g


// Array 2

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

console.log(Object.values(arr2[1])[0][0]); // => g


// Array 3

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

console.log(Object.values(arr3[2])[0][0][0]); // => g


// Object 1

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

console.log(Object.values(obj1)[1][1]); // => g


// Object 2

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}

let keyOfG = Object.values(obj2)[2];
let result = Object.keys(keyOfG)[0];

console.log(result); // => g