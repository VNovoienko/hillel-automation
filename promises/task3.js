async function fetchToDoById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    const toDo = await response.json();
    return toDo;
  } catch (error) {
    console.log("Error ToDo", error);
  }
}

async function fetchUserById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    const user = await response.json();
    return user;
  } catch (error) {
    console.log("Error User", error);
  }
}

async function fetchData() {
  try {
    const responses = await Promise.all([
      fetchToDoById("1"),
      fetchUserById("1"),
    ]);
    console.log("Promise.all result:", responses);

    const firstResponse = await Promise.race([
      fetchToDoById("1"),
      fetchUserById("1"),
    ]);
    console.log(
      "Promise.race result:",
      firstResponse,
    );
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
