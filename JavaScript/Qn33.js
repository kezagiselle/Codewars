function consonantsNumber(str){
    let consonants = "bcvbgdrmkl"
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(consonants.includes(str[i])){
            count++;
        }
    }
    return count;
};
console.log(consonantsNumber("development"));