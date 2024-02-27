import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>Cargando: {isLoading ? 'SI' : 'NO'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            <strong> {completed ? 'Completado' : 'Pendiente'} </strong>
            {title}
          </li>
        ))}
      </ul> */}

      <button onClick={prevTodo}>Anterior ToDo</button>
      <button onClick={nextTodo}>Siguiente ToDo</button>
    </>
  );
};
