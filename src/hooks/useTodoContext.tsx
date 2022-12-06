import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";

export const useTodoContext = () => useContext(TodoContext);