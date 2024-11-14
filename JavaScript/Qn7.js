// 7.	Create a function that receives an array and returns the smallest number from that array
function smallestValue(arr){
    return Math.min(...arr);
}
let arr =  [2,3,4,5];
console.log(smallestValue(arr));