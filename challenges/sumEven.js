function sumEven(arr){
    return arr.reduce((acc,val) =>{
        if(val % 2 === 0){
            return acc + val;
        } else {
            return acc;
        }
    });
};
console.log(sumEven([3,4,5,6]));