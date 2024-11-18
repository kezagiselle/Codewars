// 28.	Write a function that checks if a string is a palindrome.
function checkPalindrome(str){
  let cleanString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let reverseString = cleanString.split('').reverse().join('');

  return cleanString === reverseString;
}
console.log(checkPalindrome("A man, a plan, a canal, Panama!"));