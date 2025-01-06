function findDuplicates(arr){
 const duplicates = arr.forEach((num) =>{
    console.log( num === num);
 })
 return duplicates
};
console.log(findDuplicates([1,2,2,4,4,5,6,6]));