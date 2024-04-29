import { React, useState, useEffect, useRef } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../Slice/slice'
import { TbEdit } from "react-icons/tb";
import { MdDeleteSweep } from "react-icons/md";
import { LuMessageSquarePlus } from "react-icons/lu";
import { IoIosSave } from "react-icons/io";

function Todos() {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos);
  const [text, setText] = useState("");
  const [textCounter, setTextCounter] = useState("0");
  const [save, setsave] = useState(false);
  const [tempId, setTempId] = useState("");
  const editRef = useRef(null);

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

  return (
    <div className="w-full pb-[200px] min-h-screen bg-zinc-400 flex flex-col items-center">
      <div className="w-[600px] bg-lime-300 px-[30px] py-[20px] mt-[100px] rounded-xl">
        <h1 className='text-[50px] font-bold text-center mb-[10px]'>Manage Your Todos</h1>
        <div>
          <form onSubmit={handelSubmit} >
            <div className=' select-none py-[10px] flex border-[2px] border-black rounded-full w'>
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
              <label key={todo.Id} htmlFor={todo.Text}>
                <div className='select-none w-full flex items-start justify-start rounded-2xl bg-amber-400 mt-[20px] py-[10px] px-[15px] text-[17px]'>
                  <input type="checkbox" maxLength={"50em"} id={todo.Text} className='mr-[10px] mt-[8px] w-[30px] h-[30px]' />
                    <div className='w-full text-justify rounded-lg px-[15px] py-[10px] bg-white mr-[10px]'>
                      <h1 id={todo.Id} >{todo.Text}</h1>
                    </div>
                  <button
                  onClick={()=> getTodo(todo)}
                  disabled={save}
                  className=' text-[30px] pr-[5px] mt-[8px] hover:text-blue-600'
                  ><TbEdit /></button>
                  <button
                  disabled={save}
                  onClick={()=>(dispatch(deleteTodo(todo.Id)))} 
                  className=' text-[30px] pr-[5px] mt-[8px] hover:text-red-600'
                  ><MdDeleteSweep /></button>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todos;
