function findSecond(arr){
   let sorted = [...new Set(arr)].sort(function(a,b){return a - b});

   let secondLowest = sorted[1];
   let secondGreatest = sorted[sorted.length - 2];

   return { secondLowest, secondGreatest};
};
let arr = [1, 2, 3, 4, 5];
console.log(findSecond(arr));
