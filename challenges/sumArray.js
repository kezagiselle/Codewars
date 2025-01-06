function sumArray(arr){
    return arr.reduce((acc, num)=> acc + num, 0)
};
const arr = [1,2,3,4,5,6,7,8];
console.log(sumArray(arr));