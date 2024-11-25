function checkPositive(arr){
   let positive = arr.forEach((num) =>{
    console.log(num >0);
   }
)
return positive
};
let arr = [2,3,-5,7,-1,3,4,-1]
checkPositive(arr);