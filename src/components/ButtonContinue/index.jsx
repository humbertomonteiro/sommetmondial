import styles from "./buttonContinue.module.css";

import { FaArrowDown } from "react-icons/fa";

export default function ButtonContinue({ link, color }) {
  return (
    <>
      <a
        href={link}
        className={color === "colorful" ? styles.button2 : styles.button}
      >
        CONTINUER <FaArrowDown />
      </a>
    </>
  );
}
