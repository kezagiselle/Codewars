function vowelCount(str){
    let vowels = 'aeiouiAEIOU';
    let count = 0;

   for(let char of str){
    if(vowels.includes(char)){
        count++;
    }
   }
   return count;
};
console.log(vowelCount('shecancode'));