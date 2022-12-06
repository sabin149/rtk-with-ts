import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "../models/TodoModel";

type InitialState = {
  todos: StateType[];
};

const initialState: InitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      state.todos.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = !state.todos[index].completed;
    },

    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].title = action.payload.title;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
