import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = !state[index].completed;
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].title = action.payload.title;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, toggleTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
