class Car {
  // Write code under this line
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}; Speed: ${car.speed}; isOn: ${car.isOn}; distance: ${car.distance}; price: ${car.price}`
    );
  }

  constructor({ speed, price, maxSpeed, isOn, distance }) {
    this.speed = 0;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn(isOn) {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  decelerate(value) {
    if (this.speed - value > 0) {
     return this.speed -= value;
    }
    return this.speed 
  }
  accelerate(value) {
    if (this.speed <= this.maxSpeed) {
      this.speed += value;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += this.speed * hours;
    }
  }
}
  
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
mustang.price = 4000;
// console.log(mustang.price); // 4000
