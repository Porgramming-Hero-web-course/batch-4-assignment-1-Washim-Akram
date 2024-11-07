"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumArray = (arrayOfNumbers) => arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumArray([1, 2, 3, 4, 5]));
