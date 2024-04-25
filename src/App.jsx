import Todos from "./Components/Todos"
import AddTodo from "./Components/AddTodo"

function App() {

  return (
    <>
    <div className="w-full h-screen bg-zinc-400 flex flex-col items-center">
      <div className="w-[500px] bg-lime-300 px-[30px] py-[20px] mt-[100px] rounded-xl">
    <AddTodo/>
    <Todos/>
      </div>
    </div>
    </>
  )
}

export default App
