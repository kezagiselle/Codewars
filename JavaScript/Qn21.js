// 26.	Write a function that calculates the factorial of a number.
function findFactorial(num){
    if(num === 0 || num === 1){
        return 1;
    } else {
        return num * findFactorial(num - 1);
    }
};
console.log(findFactorial(3));