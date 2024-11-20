// Create an array of only even numbers.using filter
function filterEven(arr){
    return arr.filter(num => num %2 === 0);
}
let arr = [3,6,7,9,,0,5,3,2,5];
console.log(filterEven(arr));