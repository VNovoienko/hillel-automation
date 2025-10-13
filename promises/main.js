import ToDo from './ToDo.js';
import User from './User.js';

async function fetchData() {
    const todo = new ToDo();
    const user = new User();

    try {
        const allResults = await Promise.all([
            todo.fetchById(1),
            user.fetchById(1)
        ]);
        console.log('Promise.all result:', allResults);

        const firstResult = await Promise.race([
            todo.fetchById(1),
            user.fetchById(1)
        ]);
        console.log('Promise.race result:', firstResult);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();