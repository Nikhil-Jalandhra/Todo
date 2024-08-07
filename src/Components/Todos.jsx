import { React, useState, useEffect, useRef } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { addTodo, deleteTodo, updateTodo, todoDone } from '../Slice/slice'
import { TbEdit } from "react-icons/tb";
import { MdDeleteSweep } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoIosSave } from "react-icons/io";
import { FaFeatherAlt } from "react-icons/fa";

function Todos() {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos);
  const [text, setText] = useState("");
  const [textCounter, setTextCounter] = useState("0");
  const [save, setsave] = useState(false);
  const [tempId, setTempId] = useState("");
  const editRef = useRef(null);
  const [colourTodo, setColourTodo] = useState("");



    const newTodo = (e) =>{
      if (text !== "") { 
        e.preventDefault()
        dispatch(updateTodo({id: tempId, text: text}))
        setText("")
        setsave(false)
        setTextCounter(0)
      }else{
        e.preventDefault()
        alert("Input is empty")
      }
    }

    const getTodo = (clickedTodo) => {
      if (save === false) {
        setText(clickedTodo.Text)
        setTempId(clickedTodo.Id)
        setsave(true)
        setTextCounter(clickedTodo.Text.length)
      }   
    }
    
    useEffect(() => {
      editRef.current.focus()
    }, [getTodo]);
  
      const handelSubmit = (e) =>{
        if (text !== "") { 
          e.preventDefault()
          dispatch(addTodo(text))
          setText("")
          setTextCounter(0)
        }else{
          e.preventDefault()
          alert("Input is empty")
        }
      }

      
      const checkedTodo = (todo,e) => {
        const id = todo.Id
        dispatch(todoDone(id))
      }

  return (
    <div className="w-full pb-[200px] min-h-screen text-black bg-zinc-400 flex flex-col items-center">
      <div className=" lg:w-[600px] w-[350px] px-2 py-[20px] mt-[50px] rounded-xl">
        <div className=' w-full justify-center items-center flex lg:text-[50px] text-[30px] mb-[10px]'>
        <h1 className='font-bold text-black'>Manage Your Todo</h1>
        <span className='lg:ml-[15px] ml-[10px] text-[#0D009F] '><FaFeatherAlt /></span> 
        </div>
          <form onSubmit={handelSubmit} >
            <div className=' bg-white  py-[10px] flex border-[2px] focus-within:border-[2px] focus-within:border-rose-600 border-black rounded-full '>
              <input
              ref={editRef}
              maxLength={"200"}
              className=' w-full bg-transparent px-[15px] outline-none text-[18px] placeholder-slate-500 '
              type="text" 
              placeholder='Write Todo...'
              value={text}
              onChange={(e) => {
                const inputText = e.target.value
                setText(inputText)
                setTextCounter(inputText.length)
              }}
              />
            <h1 className=' mr-[8px] mt-[2px]'><span className=' font-bold'>{textCounter}</span>/200</h1>
            {save === false ? <button className=' pe-[15px] text-[28px] outline-none hover:text-white'type='submit' ><LuMessageSquarePlus /></button> : <button className=' pe-[15px] text-[28px] outline-none hover:text-white' onClick={newTodo} ><IoIosSave /></button> }
            
            </div>
          </form>

          <div>
            {todos.map((todo)=>(
              <label key={todo.Id} htmlFor={todo.Id}>
                <div className='w-full h-[1px] bg-gray-500 my-3'></div>
                <div className={`${save === true ? "cursor-not-allowed" : "cursor-default"} select-none w-full flex items-start justify-start rounded-2xl ${todo.complete ? "bg-green-600" : "bg-rose-600"} lg:mt-[10px] lg:py-[10px] py-[5px] lg:px-[15px] px-[10px] text-[17px]`}>
                  <input type="checkbox" disabled={save} onClick={() => checkedTodo(todo)} id={todo.Id} className={`${save === true ? "cursor-not-allowed" : "cursor-default"} mr-[10px] mt-[8px] w-[30px] h-[30px]`} />
                    <div className='w-full text-justify rounded-lg lg:px-[15px] px-[10px] py-[10px] bg-white mr-[10px]'>
                      <h1 id={todo.Id} >{todo.Text}</h1>
                    </div>
                  <div className='lg:flex md:flex'>
                    <button
                    onClick={()=> getTodo(todo)}
                    disabled={save}
                    className={`${save === true ? "cursor-not-allowed" : "cursor-default"} text-[30px] pr-[5px] mt-[8px] hover:text-white`}
                    ><TbEdit /></button>
                    <button
                    disabled={save}
                    onClick={()=>(dispatch(deleteTodo(todo.Id)))} 
                    className={`${save === true ? "cursor-not-allowed" : "cursor-default"} text-[30px] pr-[5px] mt-[8px] hover:text-white`}
                    ><MdDeleteSweep /></button>
                  </div>
                </div>
              </label>
            ))}
          </div>
        
      </div>
    </div>
  );
}

export default Todos;
