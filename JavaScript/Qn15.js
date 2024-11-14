// 20.	Create a function that displays an even number between 1 and 100
function evenNumber(){
    for(let i = 0; i < 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
console.log(evenNumber());