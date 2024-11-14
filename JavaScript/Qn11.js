// 16.	Given an array like this: 
// var some numbers = [3,4,8,2,1,2,2,6,3,4];
// a.	Create a function to sort and arrange these elements of the array in ascending order.
// b.	Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
// c.	From the same sorted array, also display the first 3 numbers.

// let arr = [4,8,5,9,3,0,2,7,3,4];
// arr.sort(function(a,b){return a - b});
// console.log(arr);

// arr.slice(-3);
// arr.slice(0,3);
// console.log(arr);

let arr = [4, 8, 5, 9, 3, 0, 2, 7, 3, 4];
arr.sort(function(a, b) { return a - b });
console.log("Sorted array:", arr);

console.log("Last 3 numbers:", arr.slice(-3)); 
console.log("First 3 numbers:", arr.slice(0, 3)); 






