import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInitialData = createAsyncThunk(
  "hnSearch/getInitialData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://hn.algolia.com/api/v1/search?query"
      );
      return data
    } catch (err) {
      rejectWithValue(err.message.data);
    }
  }
);
const initialState = {
  list: [],
  error: "",
  isLoading: true,
};
const hnSearchSlice = createSlice({
  name: "hnSearch",
  initialState,
  reducers: {},
  extraReducers: {
    [getInitialData.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getInitialData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.list = payload;
    },
    [getInitialData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export default hnSearchSlice.reducer;
