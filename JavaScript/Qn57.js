// 61.	Write a function that checks if a given string contains only digits
function checkOnlyDigits(str){
    for(let i= 0; i < str.length; i++){
        let charCode = str.charCodeAt(i);
        if(charCode < 48 || charCode > 57){
            return false
        }
    }
    return true
}
console.log(checkOnlyDigits("123"));

//a function that removes the digits in a string
function removeDigits(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
        let charCode = str.charCodeAt(i);
        if(charCode < 48 || charCode > 57){
            result += str[i];
        }
    }
    return result;
}
console.log(removeDigits("Jesus1"));
//stoped on 61