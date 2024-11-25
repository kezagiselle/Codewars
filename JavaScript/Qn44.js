function findRandom(num){
    return Math.random(num);
};
console.log(findRandom(23344));

//finding a random number in an array
function findRandomArray(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};
let arr = [1,2,3,4,5,6,7,8];
console.log(findRandomArray(arr));