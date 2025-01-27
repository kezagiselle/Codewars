
function countSentence(sentence){
    let count = 0;
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] === ""){
            count++;
        }
    }
    return count;
};
console.log(countSentence("we are"));