export default class User {
    async fetchById(id) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const user = await response.json();
            return user;
        } catch (error) {
            console.error('Error User:', error);
        }
    }
}