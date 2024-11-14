// 18.	Create a function that calculates the BMI of a person and returns the specific classification of a person according to the height and weight provided by a user.
//     How to calculate Body Mass Index:
//     BMI = weight(kg) / (height(m) x height(m))
function calculateBMI(height, weight){
    let bmi = weight / (height * height);
    if(bmi < 18.5){
        return "Underweight";
    } else if(bmi > 18.5 && bmi <= 24.9){
        return "Normal weight";
    } else if(bmi >=25 && bmi <= 29.9){
        return "Overweight";
    } else if(bmi >= 30){
        return "Obesity";
    } else {
        return "Invalid input"
    }
}
console.log(calculateBMI(1.75, 46));