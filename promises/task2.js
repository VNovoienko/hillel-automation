function fetchToDoById(id) {
  return fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

function fetchUserById(id) {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

const responses = await Promise.all([
  fetchToDoById("1"),
  fetchUserById("1"),
]);

console.log(responses);

const firstResponse = await Promise.race([
  fetchToDoById("1"),
  fetchUserById("1"),
]);

console.log(firstResponse);
