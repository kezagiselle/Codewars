function lessthanTen(arr){
    const elements = arr.filter((num)=> num <= 10);
    return elements;
};
console.log(lessthanTen([1,2,3,4,5,6,7,8,9,10,11,12]));