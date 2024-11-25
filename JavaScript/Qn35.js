function removeDuplicates(arr){
  return [...new Set(arr)];
};
let arr = [1,2,2,2,4,6,8,8,8,];
console.log(removeDuplicates(arr));

