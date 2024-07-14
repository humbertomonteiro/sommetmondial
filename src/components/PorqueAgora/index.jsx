import styles from "./porqueAgora.module.css";

import box3 from "../../assets/imgs/boxes/box3.jpg";

import ButtonContinue from "../ButtonContinue";

export default function PorqueAgora() {
  return (
    <div id="porqueAgora" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img} data-aos="fade-right">
          <img src={box3} alt="Pessoas felizes" />
        </div>
        <div className={styles.text} data-aos="fade-left">
          <h3>SOMMET MONDIAL 2025</h3>
          <h2>pourquoi maintenant ?</h2>
          <p>
            L'autisme est un défi croissant qui nécessite une action immédiate.
            Le Sommet Mondial 2025 représente une occasion unique de réunir des
            experts mondiaux, démontrant notre engagement continu envers la
            cause de l'autisme et bâtissant sur le succès des événements
            précédents.
          </p>
          <ButtonContinue link={"#potencial"} color={"colorful"} />
        </div>
      </div>
    </div>
  );
}
