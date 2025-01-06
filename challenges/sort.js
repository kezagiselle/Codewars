function sortNumbers(arr){
    let sort = arr.sort(function(a,b){return a-b});
    console.log('The sorted array is: ', sort);
    
    console.log('The last elements is: ', arr.slice(-3));
    console.log('The first elements is: ', arr.slice(0,3));
};
let arr = [1,2,3,4,5];
sortNumbers(arr);