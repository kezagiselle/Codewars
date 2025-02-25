class human{
    constructor(name,age,height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    talk(language){
        return this.name + (`can talk ${language}`);
    }
}
const human1 = new human("keza", 24, 1.71);
console.log(human1.talk("French"));