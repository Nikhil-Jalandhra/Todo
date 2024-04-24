import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../Slice/slice'


function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const deltodo = (e) => {
      console.log(e.target.value)
      dispatch(deleteTodo(e.target.value))
    }

  return (
    <div>
      {todos.map((todo,index)=>(
        <div key={index} className=' flex bg-black text-white w-[200px]'>
        <h1 >{todo.Text}</h1>
        <button value={todo.Id} onClick={deltodo} className=' ms-7'>Del</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
