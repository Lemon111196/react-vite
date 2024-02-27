import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoStore/TodoReducer";
// import exampleReducer from "./ExampleStore/ExampleReducer";

export const rootReducer = combineReducers({
  todo: todoReducer
});
