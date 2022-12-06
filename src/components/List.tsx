import { useState } from "react";
import { StateType } from "../models/TodoModel";
import { deleteTodo, toggleTodo, updateTodo } from "../features/todoSlice";

type TodoProps = {
  todo: StateType;
  dispatch: React.Dispatch<any>;
};

const List = ({ todo, dispatch }: TodoProps) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  return (
    <section className="list__section">
      <h4
        style={{
          textDecoration: todo.completed ? "line-through" : "",
        }}
      >
        {todo.title}
      </h4>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          dispatch(toggleTodo({ id: todo.id }));
        }}
      />
      <button
        onClick={() => {
          dispatch(deleteTodo({ id: todo.id }));
        }}
        className="btn delete__btn"
      >
        Delete
      </button>
      <button
        className="btn edit__btn"
        onClick={() => {
          setEdit(true);
          setEditValue(todo.title);
        }}
      >
        Edit
      </button>
      {edit && (
        <form>
          <input
            type="text"
            className="edit__input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button
            className="btn edit__btn"
            onClick={() => {
              dispatch(updateTodo({ id: todo.id, title: editValue }));
              setEdit(false);
            }}
          >
            Update
          </button>
          <button
            className="btn cancel__btn"
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </section>
  );
};

export default List;
