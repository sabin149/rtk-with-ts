import { useState } from "react";
import CompletedTodo from "../components/CompletedTodo";
import FormInput from "../components/FormInput";
import List from "../components/List";
import NotCompletedTodos from "../components/NotCompletedTodos";
import Search from "../components/Search";
import { useAppDispatch, useAppSelector } from "../hooks/useSelectorODispatch";
import { StateType } from "../models/TodoModel";

const Home = () => {
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);

  const filteredTodos = todos.filter((todo: StateType) => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <h1 className="todo__Header">Todo App</h1>
      <section className="search__section">
        <Search search={search} setSearch={setSearch} />
        <button
          className="btn show__btn"
          onClick={() => {
            setShowCompleted((prevCompleted) => !prevCompleted);
          }}
        >
          Show Completed
        </button>
      </section>
      <br />
      <FormInput />

      {filteredTodos.map((todo: StateType) => {
        return <List key={todo.id} todo={todo} dispatch={dispatch} />;
      })}

      <NotCompletedTodos />
      {showCompleted ? <CompletedTodo /> : null}
    </main>
  );
};

export default Home;
