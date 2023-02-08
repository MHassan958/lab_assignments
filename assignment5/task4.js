class Car {
  constructor() {
    this.name = "";
    this.make = "";
    this.color = "";
    this.speed = 0;
  }
  setName(name) {
    this.name = name;
  }
  setMake(make) {
    this.make = make;
  }
  setColor(color) {
    this.color = color;
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Make: ${this.make}`);
    console.log(`Color: ${this.color}`);
    console.log(`Speed: ${this.speed}`);
  }
}
