export default class ToDo {
    async fetchById(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            const todo = await response.json();
            return todo;
        } catch (error) {
            console.error('Error ToDo:', error);
        }
    }
}