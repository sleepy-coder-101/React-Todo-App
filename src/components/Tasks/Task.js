import Card from "../UI/Card";
import styles from "./Task.module.css";

const Task = (props) => {
  const clickHandler = () => {
    const id = props.id;
    // console.log("The checkBox was clicked for id: " + id);
    props.onTaskRemove(id);
  };

  return (
    <Card className={styles.card}>
      <div className={styles.text}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className={styles.done}>
        <input
          type="checkbox"
          name="TaskDone"
          onClick={clickHandler}
          className={styles.checkbox}
        />
        {/* <input type="checkbox" name="TaskDone" className={styles.checkbox} /> */}
        {/* <label htmlFor="TaskDone">Click This </label> */}
      </div>
    </Card>
  );
};

export default Task;
