const users = [
  {
    name: "Vlada",
    email: "vlada@test.com",
    age: 45,
    city: "Odesa",
  },

  {
    name: "Peter",
    email: "petr99@gmail.com",
    age: 36,
    city: "Dnipro",
  },

  {
    name: "Kate",
    email: "kate@test.com",
    age: 25,
    city: "Kyiv",
  },
];

for (const { name, email, age, city } of users) {
  console.log(name, email, age, city);
}
