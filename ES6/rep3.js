class Vehicle{
    constructor(speed, model){
        this.speed = speed;
        this.model = model;
    }
    move(){
        console.log(`Car is moving ${this.speed} with this ${this.model}`);
    }
    static greet(){
        console.log("Hello from Vehicle");
    }
}

class Car extends Vehicle{
    constructor(speed,model){
        super(speed, model);
    }
    move(){
        super.move();
        console.log("Car is also moving");
    }
}
 
const c1 = new Car(100, "KIA");
c1.move();
Car.greet();