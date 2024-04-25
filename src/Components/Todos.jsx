import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../Slice/slice'
import { MdDeleteSweep } from "react-icons/md";


function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


  return (
    <div>
      {todos.map((todo)=>(
        <div key={todo.Id} className='w-full flex rounded-2xl bg-white mt-[20px] py-[10px] px-[15px] text-[17px]'>
          <div className=' w-full overflow-hidden'>
          <h1 className=' whitespace-nowrap' >{todo.Text}</h1>
          </div>
          <button
          onClick={()=>(dispatch(deleteTodo(todo.Id)))} 
          className=' text-[27px] hover:text-red-600 bg-orange-500'
          ><MdDeleteSweep /></button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
