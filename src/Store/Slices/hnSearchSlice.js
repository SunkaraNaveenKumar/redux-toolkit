import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getInitialData = createAsyncThunk(
  "hnSearch/getInitialData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://hn.algolia.com/api/v1/search?query"
      );
      return data;
    } catch (err) {
      rejectWithValue(err.message.data);
    }
  }
);

export const getSearchData = createAsyncThunk(
  "hnSearch/getSearchData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${arg}`
      );
      return data;
    } catch (err) {
      rejectWithValue(err.message.data);
    }
  }
);

export const getNewsDetails = createAsyncThunk(
  "hnSearch/getNewsDetails",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/items/${arg}`
      );
      return data;
    } catch (err) {
      rejectWithValue(err.message.data);
    }
  }
);
const initialState = {
  list: [],
  searchText: "",
  newsDetails: {},
  error: "",
  isLoading: true,
};
const hnSearchSlice = createSlice({
  name: "hnSearch",
  initialState,
  reducers: {
    addSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
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
    [getSearchData.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getSearchData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.list = payload;
    },
    [getNewsDetails.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getNewsDetails.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.newsDetails = payload;
    },
  },
});
export const { addSearchText } = hnSearchSlice.actions;
export default hnSearchSlice.reducer;
