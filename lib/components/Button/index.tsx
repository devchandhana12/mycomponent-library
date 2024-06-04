import React from "react";
import styles from "../../assets/button.module.scss";
interface buttonProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPress: any;
}
const Button: React.FC<buttonProps> = ({ title, onPress }) => {
  return (
    <>
      <button onClick={onPress} className={styles.button}>
        {title}
      </button>
    </>
  );
};
export default Button;