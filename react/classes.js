class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  displayInfo() {
    return `Car: ${this.brand}, Year: ${this.year}`;
  }
}
const myCar = new Car("Toyota", 2020);
console.log(myCar.displayInfo());