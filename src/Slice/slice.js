import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    Todo: {
        Id: 1,
        Text: "HelloWorld"
    }
}

export const todo = createSlice(
    {
        name: "Todo",
        initialState,
        reducers: {
            addTodo: (state,action)=>{
                state.Todo.Id = nanoid()
                state.Todo.Text = action.payload        
            },
            deleteTodo: (state)=>{
                state.Todo.filter()
            }
        } 
    }
)

export const { addTodo,deleteTodo } = todo.actions

export default todo.reducer