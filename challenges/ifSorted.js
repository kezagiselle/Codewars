function arrSorted(arr){
    if(arr.sort(function(a,b){return a-b})){
        return true;
    } else{
        return false;
    }
};
console.log(arrSorted([1,2,3]));