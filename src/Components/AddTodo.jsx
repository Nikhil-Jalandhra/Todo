import React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addTodo } from '../Slice/slice'

function AddTodo() {

    const dispatch = useDispatch()

    const [text, setText] = useState("");

    const handelSubmit = (e) =>{
      if (text !== "") { 
        e.preventDefault()
        console.log("hlo")
        dispatch(addTodo(text))
        setText("")
      }else{
        alert("Please Enter Something")
      }
    }

    


  return (
    <div>
        <form onSubmit={handelSubmit} >
        <input type="text" placeholder='Enter Text' value={text} onChange={(e) => setText(e.target.value) } />
        <button type='submit' >Add Todo</button>
        </form>
    </div>
  );
}

export default AddTodo;
