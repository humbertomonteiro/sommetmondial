import styles from "./engajamento.module.css";

import box5 from "../../assets/imgs/boxes/box5.jpg";

import ButtonContinue from "../ButtonContinue";

export default function Engajamento() {
  return (
    <div id="engajamento" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img} data-aos="zoom-in">
          <img src={box5} alt="Pessoas felizes" />
        </div>
        <div className={styles.text} data-aos="zoom-in">
          <h3>SOMMET MONDIAL 2025</h3>
          <h2>impact social et engagement</h2>
          <p>
            Plus de 20% des bénéfices seront destinés à des causes sociales,
            reflétant notre engagement envers la responsabilité sociale. Le
            Sommet vise à avoir un impact positif sur la vie des personnes
            autistes et de leurs familles, en promouvant la science,
            l'innovation et l'art.
          </p>
          <ButtonContinue link={"#impacto"} />
        </div>
      </div>
    </div>
  );
}
