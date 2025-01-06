function derive(coefficient,exponent){
    let newCoefficient = coefficient * exponent;
    let newExponent = exponent - 1;

    if(newExponent === 0){
        return `${newCoefficient}`;
    } else if (newExponent === 1){
        return `${coefficient}x`;
    } else {
        return `${newExponent}x^${newExponent}`;
    }
};
console.log(derive(7,8));