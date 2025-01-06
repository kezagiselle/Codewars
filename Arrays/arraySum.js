function sumElements(arr){
    const elements = arr.reduce((acc, num)=> acc + num, 0);
    return elements;
};
console.log(sumElements([1,2,3,4,5]));