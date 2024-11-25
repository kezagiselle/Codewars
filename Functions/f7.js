// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseString(str){
    let words = str.split('');
    let reversedWords = words.reverse().join('');
    return reversedWords;
}
console.log(reverseString("This is animals"))