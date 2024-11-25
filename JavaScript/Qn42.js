function sumEven(arr){
 return arr.reduce((acc, val)=>{
    if(val % 2 === 0){
        return acc + val;
    } else {
        return acc;
    }
 });
};
let arr = [1,2,3,4,5,6,7,8];
console.log(sumEven(arr));