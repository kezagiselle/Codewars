function checkSorted(arr){
    if(arr.sort(function(a,b){return a - b})){
        return true;
    } 
    else{
        return false;
    }     
     };
     
let arr = [1,2,3,5,6,8,9,10,12,11,13];
console.log(checkSorted(arr));