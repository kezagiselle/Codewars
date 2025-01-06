// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0
function comprised(str1,str2){
    if(str1.length !== str2.length){
        throw new Error("can not be comprised")
    }
    let result = ''

    //assuming they have the same length
    for(let i = 0; i < str1.length; i++){
        const char1 = str1[i];
        const char2 = str2[i];

        if(char1 === '+' && char2 === '-'){
            result += '0';
        } else if(char1 === '-' && char2 === '-'){
            result += '-';
        } else {
            result += '+'
        }
    }
    
    return result;
};

console.log(comprised("++++", "++-+")); // 'positive'