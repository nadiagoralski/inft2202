/**
 * Vehicle
 * 
 */
class Vehicle {
  constructor(wheels) {
    // set number of wheels 
    this.wheels = wheels;
  }

  toString() {
    // returning the number of wheels for a vehicle
    return "(" + this.wheels + ")";
  }
}

/**
 * Car extends Vehicle
 */
class Car extends Vehicle {
  constructor(color) {
    // call super to create vehicle property, all have 4 wheels
    super(4);
    // set custom property color 
    this.color = color;
  }
  toString() {
    // override toString to print out wheels and the car color
    return super.toString() + " colored: " + this.color;
  }
}


let genericVehicle = new Vehicle(2);
console.log(genericVehicle, genericVehicle.toString());
console.log(genericVehicle instanceof Car); // false
console.log(genericVehicle instanceof Vehicle); // true

let blueCar = new Car('blue');
console.log(blueCar, blueCar.toString());
// check to see if blueCar is an instance of Car, Vehicle
console.log(blueCar instanceof Car); // true
console.log(blueCar instanceof Vehicle); // true