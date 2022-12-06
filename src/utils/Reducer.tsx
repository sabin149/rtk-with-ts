import { ActionType, StateType } from "../models/TodoModel";

const newTodo = (title: string) => {
  return { id: Date.now(), title, completed: false };
};

export const Reducer = (state: StateType[], action: ActionType): any => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, newTodo(action.payload.title)];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "UPDATE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.title };
        }
        return todo;
      });
    default:
      return state;
  }
};

