// 5.	Create a function that receives an array and returns the sum of all the elements inside that array.
function sumArr(arr){
    return arr.reduce((acc,num) => acc + num, 0);
}
let arr = [3,4,4,5,7,4];
console.log(sumArr(arr));