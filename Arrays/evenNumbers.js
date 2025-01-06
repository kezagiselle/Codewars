function evenNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            console.log(arr[i]);
        }
    }
    return 0;
};
console.log(evenNumbers([1,2,4,6,5,3]));