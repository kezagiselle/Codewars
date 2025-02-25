class Person{
    constructor(firstName, lastName, age, gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }
    sayFullName(){
        return this.firstName + " " + this.lastName;
    }
    static greetExtraTerrestrials(raceName){
        return `Welcome to Planet Earth ${raceName}`;
    }
}

const p1 = new Person("John", "Doe", 20, "female");
console.log(p1.sayFullName());
Person.greetExtraTerrestrials("Martians");