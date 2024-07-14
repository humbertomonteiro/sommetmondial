import styles from "./patrocinadores.module.css";

import logo from "../../assets/imgs/logo/logoWhite.jpg";

export default function Patrocinadores({ array }) {
  return (
    <div className={styles.container}>
      <div className={styles.title} data-aos="zoom-in">
        <h2>INTERVENANTS</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.boxes}>
          {array.map((item, index) => (
            <div key={index} className={styles.box} data-aos="zoom-in">
              <img
                src={item.img ? item.img : logo}
                alt={item.name ? item.name : logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
