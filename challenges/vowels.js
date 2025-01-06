function vowelCount(str){
    let vowels = "auoei";
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
         count++;
        }
    }
    
    return count;
};
console.log(vowelCount("development"));