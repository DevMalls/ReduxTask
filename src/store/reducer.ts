import { createSlice } from "@reduxjs/toolkit";

const initialState: Object[] = [];

const todoReducer = createSlice({
  name: "todotask",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    removeTask: (state, action) => {
      state = state.filter((item: any) => item.id !== action.payload);
      return state;
    },

    updateTask: (state: any, action) => {
      state.map((item: any) => {
        console.log(item.id, action);
        if (item.id === action.payload) {
          item.status = "Completed";
          item.checked = true;
        }
      });
      return state;
    },
  },
});

export const { addTask, removeTask, updateTask } = todoReducer.actions;
export default todoReducer.reducer;
