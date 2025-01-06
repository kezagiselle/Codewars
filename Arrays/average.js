function averageElements(arr){
    for(var i=0; i<arr.length; i++){
        let sum = arr.reduce((acc, num)=> acc + num, 0);
        return sum / 2;
    }
};
console.log(averageElements([2,3,5,6]));