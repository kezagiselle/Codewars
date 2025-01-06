// 55.	Write a function that checks if a given year is a leap year.
function leapYear(year){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
        return true;
    }
    return false;   
}
console.log(leapYear(2023));
