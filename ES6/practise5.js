// write a function that takes a nested array of numbers and returns a new array that is flattened
// (one level deep) and contains only the unique numbers, in ascending order

function flattenAndSortUnique(arr) {
    // create a new array to store unique numbers
    let uniqueArr = [];

    // iterate over the input array
    for (let i = 0; i < arr.length; i++) {
        // if the element is an array, recursively call the function
        if (Array.isArray(arr[i])) {
            uniqueArr = uniqueArr.concat(flattenAndSortUnique(arr[i]));
        } else {
            // if the element is not an array, check if it's already in the uniqueArr
            if (!uniqueArr.includes(arr[i])) {
                uniqueArr.push(arr[i]);
            }
        }
    }

    // sort the uniqueArr in ascending order
    uniqueArr.sort((a, b) => a - b);

    return uniqueArr;
};

const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
console.log(flattenAndSortUnique(nestedArray));