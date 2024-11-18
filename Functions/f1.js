// Write a JavaScript function that reverses a number.
function reverseNum(num){
    return num.toString().split('').reverse().join('');
}
console.log(reverseNum(3455));