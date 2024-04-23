import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../Slice/slice'


function Todos() {

    const todos = useSelector(state => state.todos)

  return (
    <div>
      {todos.map((todo,index)=>(
        <h1 key={index}>{todo.Text}</h1>
      ))}
    </div>
  );
}

export default Todos;
