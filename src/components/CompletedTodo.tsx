import { useAppSelector } from "../hooks/useSelectorODispatch";
import { StateType } from "../models/TodoModel";

const CompletedTodo = () => {
  const { todos } = useAppSelector((state) => state.todo);

  const completedTodos = todos.filter((todo: StateType) => {
    return todo.completed;
  });
  return (
    <>
      <hr />
      <h3>Completed Todos</h3>
      <hr />
      {completedTodos.length > 0 ? (
        completedTodos.map((todo: StateType) => {
          return <h5 key={todo.id}>{todo.title}
          </h5>;
        })
      ) : (
        <h5>No Completed Todos</h5>
      )}
    </>
  );
};

export default CompletedTodo;
