import { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from "./AddTask.module.css";
import NewTask from "./NewTask";

const AddTask = (props) => {
  const [openAddTask, setOpenAddTask] = useState(false);

  const toggleModalHandler = () => {
    setOpenAddTask((prevState) => {
      return !prevState;
    });
  };

  // const addTaskHandler = (newTask) => {
  //   const enrichedTask = { ...newTask };
  //   return enrichedTask;
  // };

  return (
    <div className={styles.container}>
      <Button
        className={styles.button}
        type="button"
        text="Add Task"
        onClick={toggleModalHandler}
      />
      {openAddTask && (
        <Modal onCloseModal={toggleModalHandler}>
          <NewTask onClick={toggleModalHandler} onAddTask={props.onAddTask} />
        </Modal>
      )}
    </div>
  );
};

export default AddTask;
