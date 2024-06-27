import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSliceReducer";

const store=configureStore({
    reducer:{
        auth:authSliceReducer,

    }
})
export default store;