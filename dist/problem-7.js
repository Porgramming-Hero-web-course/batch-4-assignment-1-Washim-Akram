"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
