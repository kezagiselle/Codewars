// write a function that takes an array of objects, where each object has a name(string)
// and an age (Number) property. The function should return a new array containing the names of all people older than 18, transformed to uppercase

const people = (arr) =>{
    const results = {};

    for (const { name, age} of arr){
        if (age > 18){
            results[name.toUpperCase()] = true;
        }
    }
    return results;
};

const data = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 17 },
    { name: 'David', age: 25 },
];
const answers = people(data);
console.log(answers);