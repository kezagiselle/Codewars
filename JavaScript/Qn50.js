function capitalFirst(str){
    let sentence = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return sentence 
};
let str = "web development"
console.log(capitalFirst(str));

//stoped on 54.