import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(itemName) {
    const newArray = todos.map((todo) =>
      todo.name === itemName
        ? { ...todo, isComplete: !todo.isComplete }
        : { todo }
    );
    setTodos(newArray);
    console.log(todos);
  }
  const completedTask = item.isComplete ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={completedTask} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
