function removeNegative(arr){
    return arr.filter((num) => num < 0);
};
let arr = [2,3,4,-2,-4,-5,-1];
console.log(removeNegative(arr));