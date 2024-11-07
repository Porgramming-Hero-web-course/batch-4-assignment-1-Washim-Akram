"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
