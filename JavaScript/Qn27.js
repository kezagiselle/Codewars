// Merge two arrays into one.
function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2];
};
let arr1 = [2,4,7,8,9];
let arr2 = [4,5,7,9,0];
console.log(mergeArrays(arr1, arr2));