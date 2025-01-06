function countConsonants(str){
    let consonants = "jfkelmn";
    let count = 0;
    for(let char of str){
        if(consonants.includes(char)){
            count++;
        }
    }
    return count;
};
console.log(countConsonants("development"));