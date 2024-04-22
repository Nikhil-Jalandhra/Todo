import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Id: 1,
    Text: "HelloWorld"
}

export const todo = createSlice(
    {
        name: "Todo",
        initialState,
        reducers: {
            addTodo: (state,action)=>{

            },
            removeTodo: (state,action)=>{

            }
        } 
    }
)