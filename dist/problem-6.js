"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateProfile = (profile, updates) => {
    const updatedProfile = Object.assign(Object.assign({}, profile), updates);
    return updatedProfile;
};
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
