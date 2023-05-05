import { configureStore } from "@reduxjs/toolkit";
import hnSearchSlice from "./Slices/hnSearchSlice";

export const store = configureStore({
    reducer:{
        hnSearchData:hnSearchSlice
    }
})