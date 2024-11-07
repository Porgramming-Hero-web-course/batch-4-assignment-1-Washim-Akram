"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = (arrayOfNumbers) => {
    return [...new Set(arrayOfNumbers)];
};
const removedDuplicates = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(removedDuplicates);
