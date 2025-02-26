// write a function that takes an array of Objects, where each object has a category 
// property and a value property(which is a number). The function should return a
// a new object where the keys are the category and the values are the sum of the value properties for that category

const sumByCategory = (arr) =>{
    const results = {};

    for(const { category, value} of arr){
        results[category] = (results[category] || 0) + value;
    }
    return results;
};

const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 20 },
    { category: 'A', value: 15 },
    { category: 'C', value: 5 },
    { category: 'B', value: 25 },
];

const aggregated =  sumByCategory(data);
console.log(aggregated);