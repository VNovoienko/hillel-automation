const person = {
    fistName: "Vlada",
    lastName: "Novoienko",
    age: 26
}

person.email = "vlada.test@gmail.com";
delete person.age;
console.log(person);