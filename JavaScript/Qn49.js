function findMedian(arr){
    arr.sort(function(a, b){return a - b});
    let mid = Math.floor(arr.length / 2);
     
    if(arr.length % 2 === 0){
        return arr[mid - 1] + arr[mid] / 2;
    }
    return arr[mid];
};
let arr = [1,2,3,4,5,6,7,8];
console.log(findMedian(arr));