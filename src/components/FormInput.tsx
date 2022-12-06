import { useEffect, useRef } from "react";
import { useAppDispatch } from "../hooks/useSelectorODispatch";
import {addTodo} from "../features/todoSlice"

const FormInput = () => {
  const dispatch = useAppDispatch();
  const titleRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const title= titleRef.current.value 
    dispatch(addTodo({title}));
    titleRef.current.value = "";
  };

  return (
    <section className="header__section">
      <form onSubmit={handleSubmit}>
        <input
          className="add__input"
          type="text"
          ref={titleRef}
          placeholder={"Enter the todo"}
        />
        <button className="btn add__btn">Add</button>
      </form>
    </section>
  );
};

export default FormInput;
