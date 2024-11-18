// Write a JavaScript function that checks whether a passed string is a palindrome or not?
function isPalindrome(str){
    let cleanString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversedString = cleanString.split('').reverse().join('');

   return cleanString === reversedString;
}
console.log(isPalindrome("madam"));