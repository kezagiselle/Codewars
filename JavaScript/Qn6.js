// 6.	Create a function that receives an array and returns the greatest value inside that array
function greatestValue(arr){
    return Math.max(...arr)
}
let arr = [6,5,7,4];
console.log(greatestValue(arr));