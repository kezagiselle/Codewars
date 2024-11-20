// Learn how to reverse the order of elements in an array.

// Example 4: Calculating Square Roots
// const numbers = [4, 9, 16, 25];

// const squareRoots = numbers.map((number) => Math.sqrt(number));

// console.log(squareRoots);

// Output: [2, 3, 4, 5]

// Example 3: Extracting Object Properties
// const users = [

//  { name: 'Alice', age: 25 },

//  { name: 'Bob', age: 30 },

//  { name: 'Charlie', age: 22 }

// ];

// const names = users.map((user) => user.name);

// console.log(names);

// Example 2: Uppercasing Strings
// const words = ['apple', 'banana', 'cherry'];

// const uppercasedWords = words.map((word) => word.toUpperCase());

// console.log(uppercasedWords);

// Output: ['APPLE', 'BANANA', 'CHERRY']

// Example 1: Doubling Numbers
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map((number) => number * 2);

// console.log(doubledNumbers);

// Output: [2, 4, 6, 8, 10]

// Exercise 6: Square Even Numbers
// Task: Given an array of numbers, create a new array with only the square of even numbers.

// Steps:

// Declare an array of numbers.
// Use the map method with a conditional statement to filter and square even numbers.

// Code:

// const originalNumbers = [1, 2, 3, 4, 5];

// const squaresOfEvens = originalNumbers.map((number) => (number % 2 === 0) ? number * number : number);

// console.log(squaresOfEvens);

// Output: [1, 4, 3, 16, 5]

// Exercise 5: Customize Mapping Function
// Task: Given an array of temperatures in Celsius, create a new array with temperatures converted to Fahrenheit.

// Steps:

// Declare an array of temperatures in Celsius.
// Use the map method with a custom mapping function to convert temperatures to Fahrenheit.

// Code:

// const temperaturesInCelsius = [25, 30, 15, 20];

// const temperaturesInFahrenheit = temperaturesInCelsius.map((celsius) => (celsius * 9/5) + 32);

// console.log(temperaturesInFahrenheit);

// Output: [77, 86, 59, 68]

// Exercise 4: Calculate Square Roots
// Task: Given an array of numbers, create a new array with the square root of each number.

// Steps:

// Declare an array of numbers.
// Use the map method to create a new array with the square root of each number.

// Code:

// const originalNumbers = [4, 9, 16, 25];

// const squareRoots = originalNumbers.map((number) => Math.sqrt(number));

// console.log(squareRoots);

// Output: [2, 3, 4, 5]

// Exercise 7: Calculate Area of Rectangles
// Task: Given an array of rectangles with width and height, create a new array with the calculated area of each rectangle.

// Steps:

// Declare an array of rectangles (objects with width and height).
// Use the map method to create a new array with the calculated area for each rectangle.

// Code:

// const rectangles = [

//  { width: 3, height: 5 },

//  { width: 4, height: 8 },

//  { width: 2, height: 6 }

// ];

// const areas = rectangles.map((rectangle) => rectangle.width * rectangle.height);

// console.log(areas);

// Output: [15, 32, 12]

// Exercise 8: Extract Initials from Names
// Task: Given an array of names, create a new array with the initials of each name.

// Steps:

// Declare an array of names.
// Use the map method to create a new array with the initials of each name.

// Code:

// const names = ['John Doe', 'Alice Smith', 'Bob Johnson'];

// const initials = names.map((name) => {

//  const [firstName, lastName] = name.split(' ');

//  return ${firstName.charAt(0)}${lastName.charAt(0)};

// });

// console.log(initials);

// Output: ['JD', 'AS', 'BJ']



// pART 2

// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//   // your code here
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


// 2) Take an array of numbers and make them strings
// function stringItUp(arr){
//   // your code here
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
// function capitalizeNames(arr){
//   // your code here
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jaco

// 4) Make an array of strings of the names
// function namesOnly(arr){
//   // your code here
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// ) Make an array of strings of the names saying whether or not they can go to The Matrix
// function makeStrings(arr){
//   // your code here
// }

// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]


// 6) Make an array of the names in h1s, and the ages in h2s
// function readyToPutInTheDOM(arr){
//   // your code here
// }
// console.log(readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
