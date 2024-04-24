import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoreducer = createSlice({
        name: 'Todo',
        initialState,
        reducers: {
            addTodo: (state,action)=>{
                const todo = {
                    Id: nanoid(),
                    Text: action.payload
                }
                localStorage.setItem(todo.Id, todo.Text)
                state.todos.push(todo)
            },
            deleteTodo: (state,action)=>{
                state.todos = state.todos.filter((todo)=> todo.Id !==  action.payload)
            }
        } 
})

export const { addTodo, deleteTodo } = todoreducer.actions

export default todoreducer.reducer