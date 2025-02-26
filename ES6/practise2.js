// 

const mapByIdToName = (arr) => {
    const results = {};

    for (const {id, name} of arr) {
        results[id] = name;
    }
    return results;
};

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const answers =  mapByIdToName(users);
console.log(answers);