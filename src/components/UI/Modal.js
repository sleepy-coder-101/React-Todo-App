import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={props.className}>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
