// store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "../pages/dataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer
  }
});

export default store;
