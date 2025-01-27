//using extend and Super

class Vehicle{
    constructor(speed){
        this.speed = speed;
    }
    move(){
        console.log(`vehicle moving ${this.speed}`);
    }
    static greet(){
        console.log("Hello from Vehicle");
    }
}
 class Car extends Vehicle{
    constructor(speed){
        super(speed);
    }
    move(){
        super.move()
        console.log(`car moving`)
    }
 }
 const c1 = new Car(100);
 c1.move();
 Car.greet();


 //built in class inheritance -Array, String, Map
 class myString extends String{
    upper(){
        console.log(this.toUpperCase());
    }
 }
 const s1 = new myString('hello');
 s1.upper();








//  The super() call is used to invoke the constructor of the parent class (Vehicle).
// This is necessary because Car extends Vehicle, and you need to initialize the Vehicle part of Car before adding anything specific to Car.
// If the Vehicle constructor takes a parameter (like speed), you pass that parameter via super(speed).

// In the move Method (super.move()):

// The super.move() call is used to call the move method defined in the parent class (Vehicle).