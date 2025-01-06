function ascending(arr){
    return arr.sort(function(a,b){return a-b});
};
console.log(ascending([2,4,6,9,8,1]));