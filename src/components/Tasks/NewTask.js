import { useRef } from "react";
import Button from "../UI/Button";

import styles from "./NewTask.module.css";

const NewTask = (props) => {
  const enteredTask = useRef("");
  const enteredDescription = useRef("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const title = enteredTask.current.value;
    const description = enteredDescription.current.value;

    // console.log(title);
    // console.log(description);
    const newTask = {
      title,
      description,
    };
    props.onAddTask(newTask);

    enteredTask.current.value = "";
    enteredDescription.current.value = "";
  };

  return (
    <form onSubmit={formSubmitHandler} className={styles.containerForm}>
      <div className={styles.container1}>
        <label htmlFor="taskHeading" className={styles.taskLabel}>
          <h1>Add task</h1>
        </label>
        <input
          ref={enteredTask}
          type="text"
          name="taskHeading"
          className={styles.inputLabel}
        />

        <label htmlFor="taskDescription" className={styles.taskLabel}>
          <h1>Add description</h1>
        </label>
        <input
          ref={enteredDescription}
          type="text"
          name="taskDescription"
          className={styles.inputLabel}
        />
      </div>

      <div className={styles.container2}>
        <Button
          text="Close"
          type="button"
          onClick={props.onClick}
          className={styles.button}
        />
        <Button text="Add" type="submit" className={styles.button} />
      </div>
    </form>
  );
};

export default NewTask;
