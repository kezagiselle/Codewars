function removeNegative(arr){
    return arr.filter((num => num < 0));
};
console.log(removeNegative([-1,3,4,5]));