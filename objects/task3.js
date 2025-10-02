const car1 = {
    brand: "Mazda",
    model: "3",
    year: 2019
}

const car2 = {
    brand: "AUDI",
    model: "A4",
    owner: "Vlada"
}

const car3 = {
    ...car1,
    ...car2
}

console.log(car3);