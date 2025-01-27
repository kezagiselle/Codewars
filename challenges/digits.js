// function checkDigits(str){
//     for(let i = 0; i < str.length; i++){
//         let charCode = str.charCodeAt(i);
//         if(charCode < 48 || charCode > 57){
//             return false;
//         }
//     }
//     return true;
// };
// console.log(checkDigits("123"));

function removeDigits(str){
    let result = '';
    for(let i = 0; i < str.length; i++){
        let charCode = str.charCodeAt(i);
        if(charCode < 48 || charCode > 57){
            result += str[i];
        }
    }
    return result;
};
console.log(removeDigits("bella1"));