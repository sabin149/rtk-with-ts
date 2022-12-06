import { createContext } from "react";
import { useTodoReducer } from "../hooks/useTodoReducer";
import { ActionType, StateType } from "../models/TodoModel";

type TodoContext = {
  todos: StateType[];
  dispatch: React.Dispatch<ActionType>;
};

export const TodoContext = createContext({} as TodoContext);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const { state, dispatch } = useTodoReducer();

  return (
    <TodoContext.Provider value={{ dispatch, todos: state }}>
      {children}
    </TodoContext.Provider>
  );
}
