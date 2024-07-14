import styles from "./potencial.module.css";

import box4 from "../../assets/imgs/boxes/box4.jpg";

import ButtonContinue from "../ButtonContinue";

export default function Potencial() {
  return (
    <div id="potencial" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img} data-aos="zoom-in">
          <img src={box4} alt="Admirando Paisagem" />
        </div>
        <div className={styles.text} data-aos="zoom-in">
          <h3>SOMMET MONDIAL 2025</h3>
          <h2>potentiel d'impact</h2>
          <p>
            Avec des millions de personnes touchées par l'autisme en Europe et
            dans le monde, le Sommet Mondial 2025 a un potentiel significatif de
            sensibilisation et d'impact social. Cet événement atteindra non
            seulement les participants sur place mais élargira également sa
            portée à travers les médias et les réseaux sociaux.
          </p>
          <ButtonContinue link={"#engajamento"} />
        </div>
      </div>
    </div>
  );
}
