// 8.	Create a function that receives an array of numbers and returns the average of the numbers
function averageNum(arr){
    const sum = arr.reduce((acc,num) => acc + num, 0);
    return sum /arr.length;
}
let arr = [5,4,6,7];
console.log(averageNum(arr));