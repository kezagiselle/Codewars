// function removeDuplicates(arr){
//     return [...new Set(arr)];
// };
// let arr = [2,2,1,1];
// console.log(removeDuplicates(arr));

function removeDuplicates(arr){
    let results = [];
    for(let i = 0; i < arr.length; i++){
        if(!results.includes(arr[i])){
            results.push(arr[i]);
        }
    }
    return results;
};
let arr = [2,2,1,1];
console.log(removeDuplicates(arr));