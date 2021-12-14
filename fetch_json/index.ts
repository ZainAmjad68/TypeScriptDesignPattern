import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo; // if we're using wrong properties of response, we will get error as soon as we do this, instead of after executing
  // we're just saying response.data is a Todo so that everyone knows exactly all of its properties

  //  logTodo(todo.id, todo.completed, todo.title); // throws error: parameter *** implicitly has an 'any' type
  logTodo(todo.id, todo.title, todo.completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `Got a Todo with id:${id} and title:${title} but is it completed?:${completed}`
  );
};
