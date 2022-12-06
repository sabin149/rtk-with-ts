import { useReducer } from "react";
import { StateType } from "../models/TodoModel";
import { Reducer } from "../utils/Reducer";

const initialState: StateType[] = [];

export const useTodoReducer = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return { state, dispatch };
};
