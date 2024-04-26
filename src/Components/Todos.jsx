import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../Slice/slice'
import { MdDeleteSweep } from "react-icons/md";
import { TbEdit } from "react-icons/tb";


function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


  return (
    <div>
      {todos.map((todo)=>(
        <div key={todo.Id} className='w-full inline-flex rounded-2xl bg-amber-400 mt-[20px] py-[10px] px-[15px] text-[17px]'>
          <input type="checkbox" className=' mr-[5px] w-[25px]' />
          <div className='w-full text-justify rounded-lg px-[15px] py-[10px] bg-white mr-[10px]'>
          <h1 className='' >{todo.Text}</h1>
          </div>
          <button 
          className=' text-[30px] pr-[5px] hover:text-blue-600'
          ><TbEdit /></button>
          <button
          onClick={()=>(dispatch(deleteTodo(todo.Id)))} 
          className=' text-[30px] pr-[5px] hover:text-red-600'
          ><MdDeleteSweep /></button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
