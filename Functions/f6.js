function findLongest(str){
    let words = str.split(' ');
    let longestWord = words.reduce((longest, currentWord) =>{
        return currentWord.length > longest.length ? currentWord : longest;
    },'');
    return longestWord;
}
console.log(findLongest('web development'));