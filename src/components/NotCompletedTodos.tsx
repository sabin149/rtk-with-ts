import { useAppSelector } from "../hooks/useSelectorODispatch";
import { useTodoContext } from "../hooks/useTodoContext";
import { StateType } from "../models/TodoModel";

const NotCompletedTodos = () => {
  const {todos} = useAppSelector((state) => state.todo);

  const notCompletedTodos = todos.filter((todo: StateType) => {
    return !todo.completed;
  }).length;

  return (
    <>
      <h3>You have {notCompletedTodos} todos left</h3>
    </>
  );
};

export default NotCompletedTodos;
