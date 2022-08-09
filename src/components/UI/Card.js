import styles from "./Card.module.css";

const Card = (props) => {
  const allClasses = props.className + " " + styles.card;
  return <div className={allClasses}>{props.children}</div>;
};

export default Card;
