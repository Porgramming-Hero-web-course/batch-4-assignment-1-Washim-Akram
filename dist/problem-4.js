"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateShapeArea = (shape) => {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        throw new Error("Shape type is not familiar!");
    }
};
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);
