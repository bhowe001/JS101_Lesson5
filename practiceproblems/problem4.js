// JS 101 
// Lesson 5
// Practice Problem 4


// Array 1

let arr1 = [1, [2, 3], 4];

arr1[1][1] = 4;
console.log(arr1); // => 4


// Array 2

 let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

 arr2[2] = 4;
 console.log(arr2); // => 4


 // Object 1

 let obj1 = { first: [1, 2, [3]] };

 obj1['first'][2][0] = 4;
 console.log(obj1); // => 4


  // Object 2
  
 let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

 obj2['a']['a'][2] = 4
 console.log(obj2); // => 4
