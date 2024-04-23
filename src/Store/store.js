import { configureStore } from "@reduxjs/toolkit";
import { todoreducer } from "../Slice/slice";

export const store = configureStore({
    reducer: todoreducer.reducer
})

