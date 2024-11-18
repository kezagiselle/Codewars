// Write a JavaScript function that returns a string that has letters in alphabetical order.
function alphabetical(str){
    return str.split('').sort().join('').toLowerCase().toString();
}
console.log(alphabetical("webmaster"));