import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async thunk action
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

// Define initial state
const initialState = {
  data: [],
  loading: false,
  error: null
};

// Create a slice
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// Export actions and reducer
export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
