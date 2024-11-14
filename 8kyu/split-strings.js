function splitStrings(str){
    
    if(str.length % 2 !== 0){
        str += '_';
    }

    //split into pairs of 2
    let pairs = [];
    for(let i = 0; i < str.length; i + 2){
        pairs.push(str.slice(i, i + 2));
    }
    return pairs;
   
};
console.log(splitStrings("abcdf5"));
