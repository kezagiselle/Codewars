function stringModifier(str, position,character){
    if(position < 0 || position >= str.length){
        return "Invalid position";
    }
    return str.slice(0, position) + character + str.slice(position + 1);
};
console.log(stringModifier("Bella", 4, "e"));