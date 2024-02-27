import { createSlice } from "@reduxjs/toolkit";
import { ITodoList, ITodoStore } from "./interface";

const initialState: ITodoStore = {
  loading: false,
  todoList: []

};

const TodoReducer = createSlice({
  name: "TodoReducer",
  initialState,
  reducers: {
    getTodo: (state) => {
      state.loading = true;

    },
    createTodo: (state, action) => {
      state.todoList.push(action.payload)
    }

  },
});

export const TodoActions = TodoReducer.actions;

export default TodoReducer.reducer;
