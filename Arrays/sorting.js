function sortNumbers(arr){
    return arr.sort(function(a,b){return a - b});
};
console.log(sortNumbers([2,3,1,5,6,2,7,9]));