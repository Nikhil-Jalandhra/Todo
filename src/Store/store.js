import { configureStore } from "@reduxjs/toolkit";
import { todo } from "../Slice/slice";

export const store = configureStore({
    reducer: todo
})

