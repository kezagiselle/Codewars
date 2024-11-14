// 9.	Create a function that combines two arrays into one single array. 
// 	Use the following arrays:
// 	arrange = [a,b,c,d]
// 	array to = [e,f,g]
function combineArr(arr1,arr2){
    let comb = arr1.concat(arr2);
    return comb;
};
let arr1 = ['a', 'b', 'c', 'd'];
let arr2 = ['a', 'b', 'c', 'd'];
console.log(combineArr(arr1,arr2));
