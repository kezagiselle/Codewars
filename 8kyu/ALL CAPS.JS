function allUpperCase(string){
  const letters = string.split(' ');
  const eachLetter = letters.map((letters)=> {
     return letters.split('').every(char => char === char.toUpperCase() && char !== char.toLowerCase());
  })
  return eachLetter.every(isUppercase => isUppercase)
  }
console.log(allUpperCase("HELLO world"));