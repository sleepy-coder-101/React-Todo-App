import React from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import Task from "./Task";

import styles from "./TaskList.module.css";

const TaskList = (props) => {
  const taskList = props.onTaskArray;
  // const taskList = tasks;

  let listIsEmpty = true;
  if (taskList.length !== 0) {
    listIsEmpty = false;
  }

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        {props.loading && <LoadingIndicator />}
        {!props.loading && listIsEmpty && (
          <h1 className={styles.empty}>Looks like you are all caught up!</h1>
        )}
      </div>
      <ul className={styles.itemList}>
        {taskList.map((task) => (
          <Task
            key={Math.random().toString()}
            id={task.id}
            title={task.title}
            description={task.description}
            onTaskRemove={props.onTaskRemove}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
