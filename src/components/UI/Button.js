import styles from "./Button.module.css";

const Button = (props) => {
  const allClasses = props.className + " " + styles.button;

  return (
    <div className={styles.container}>
      <button className={allClasses} type={props.type} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
