// 23.	Write a function that checks if a number is odd.
function checkOdd(num){
    if(num % 2 !== 0){
        return "odd";
    } else{
        return "not odd";
    }
};
console.log(checkOdd(3));