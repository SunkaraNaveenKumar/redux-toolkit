import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    list:[],
    error:""
}
const hnSearchSlice=createSlice({
    name:"hnSearch",
    initialState,
    reducers:{},
    extraReducers:{

    }
})
export default hnSearchSlice.reducer