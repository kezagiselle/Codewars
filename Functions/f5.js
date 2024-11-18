// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
  

function stringUpper(str){
    return str.at(0).toUpperCase() + str.slice(1);
}
console.log(stringUpper('benin'));