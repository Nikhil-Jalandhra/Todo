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
                // localStorage.setItem(todo.Id, todo.Text)
                state.todos.push(todo)
            },
            deleteTodo: (state,action)=>{
                state.todos = state.todos.filter((todo)=> todo.Id !==  action.payload)
            },
            updateTodo: (state,action)=>{
                const {id, text} = action.payload
                const update = state.todos.find(todo => todo.Id === id)
                if(update){
                    update.Text = text
                }
            }
        } 
})

export const { addTodo, deleteTodo, updateTodo } = todoreducer.actions

export default todoreducer.reducer