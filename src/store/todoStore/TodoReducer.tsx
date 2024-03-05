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
    },
    deleteTodo: (state, action) => {
      console.log(action.payload);
      state.todoList = state.todoList.filter(item => item.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.todoList.findIndex(item => item.id === id);

      if (index !== -1) {
        state.todoList[index] = { ...state.todoList[index], ...updatedTodo };
      }
    },
  },
});

export const TodoActions = TodoReducer.actions;

export default TodoReducer.reducer;
