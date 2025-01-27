function checkPrime(num){
    if(num <= 1){
        return false;
    } else {
        for(let i = 0; i < Math.sqrt(num); i++){
            if(num % i == 0){
                return false;
            }
        }
    }
    return true;
};
console.log(checkPrime(6));