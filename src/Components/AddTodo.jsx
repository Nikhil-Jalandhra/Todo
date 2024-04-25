import React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addTodo } from '../Slice/slice'
import { LuMessageSquarePlus } from "react-icons/lu";

function AddTodo() {

    const dispatch = useDispatch()

    const [text, setText] = useState("");

    const handelSubmit = (e) =>{
      if (text !== "") { 
        e.preventDefault()
        dispatch(addTodo(text))
        setText("")
      }else{
        e.preventDefault()
        alert("Please Enter Something")
      }
    }

    


  return (
    <div>
        <form onSubmit={handelSubmit} >
        <div className=' py-[10px] flex border-[2px] border-black rounded-full w'>
        <input
        className=' w-full bg-transparent px-[15px] outline-none text-[18px] placeholder-slate-500 '
        type="text" 
        placeholder='Enter Text' 
        value={text} 
        onChange={(e) => setText(e.target.value) }
         />
        <button 
        className=' pe-[15px] text-[28px] outline-none hover:text-white'
        type='submit' ><LuMessageSquarePlus /></button>
        </div>
        </form>
    </div>
  );
}

export default AddTodo;
