import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", isComplete: false });

  function handleSubmit(e) {
    e.preventDefault();
    //todos is a state variable that stores set of todos
    // Hence a spread operator is used to retain previous todos

    setTodos([...todos, todo]);
    setTodo({ name: "", isComplete: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, isComplete: false })}
          type="text"
          value={todo.name}
          placeholder="Task to do.."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
