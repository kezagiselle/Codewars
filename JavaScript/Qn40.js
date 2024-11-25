function ascendingOrder(arr){
    return arr.sort(function(a,b){return a - b});
};
let arr = [2,3,4,5,,3,2,7,4,9,3];
console.log(ascendingOrder(arr));

//stopped on 43 on exercise.