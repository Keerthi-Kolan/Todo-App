import styles from "./footer.module.css";
export default function Footer({ doneItems, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {doneItems}</span>
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </div>
  );
}
