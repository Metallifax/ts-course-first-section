// Used to make api calls --> http://jsonplaceholder.typicode.com/
import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId: number,
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo: Todo = response.data;
  const userId = todo.userId;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(userId, id, title, completed);
});

const logTodo = (userId: number, id: number, title: string, completed: boolean) => {
  console.log(`
  User: ${userId}
  ID: ${id}
  title: ${title}
  completed?: ${completed}
  `);
}
