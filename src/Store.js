import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice.js";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
