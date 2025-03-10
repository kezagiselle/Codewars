// write a function that takes an array of objects, where each object has a 
// type property. The function should return an object where the keys are the unique type
// values and the values are the number of occurrences of that type in the input array

const countByType = (arr) =>{
    const results = {};

    for (const { type} of arr){
        results[type] = (results[type] || 0) + 1;
    }
    return results;
};

const items = [
    { type: 'fruit' },
    { type: 'vegetable' },
    { type: 'fruit' },
    { type: 'fruit' },
    { type: 'vegetable' },
    { type: 'grain' },
];

const answers =  countByType(items);
console.log(answers);


