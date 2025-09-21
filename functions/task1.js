function squareDeclaration(widht, height) {
    return widht * height;
}

console.log(squareDeclaration(5, 10));

const squareExpression = function (widht, height) {
    return widht * height;
}

console.log(squareExpression(5, 10));

//first version
const squareArrow = (widht, height) => widht * height

console.log(squareArrow(5, 10));

//second version 
const squareArrow1 = (widht, height) => {
    console.log(widht * height);
}

squareArrow1(5, 10);
