"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateKeys(obj, keys) {
    return keys.every((key) => key in obj);
}
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));
