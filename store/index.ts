import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import generalSlice from "./slices/generalSlice";

const makeStore = () => configureStore({
    reducer :{
        [generalSlice.name]:generalSlice
    },
    devTools:true
})

export const wrapper = createWrapper(makeStore);