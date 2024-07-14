import styles from "./impacto.module.css";

import teafrica from "../../assets/imgs/boxes/teafrica.png";

import ButtonContinue from "../ButtonContinue";

export default function impacto() {
  return (
    <div id="impacto" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img} data-aos="zoom-in">
          <img src={teafrica} alt="Teafrica" />
        </div>
        <div className={styles.text} data-aos="zoom-in">
          <h3>SOMMET MONDIAL 2025</h3>
          <h2>impact social</h2>
          <p>
            •Plus de 20 % des bénéfices seront orientés vers des causes sociales
            en France et à l'international. •Un impact positif sur la vie des
            personnes atteintes d'autisme et de leurs familles. •Engagement
            envers la responsabilité sociale d'entreprise. •Donner la parole aux
            institutions, aux professionnels de la santé et aux autistes
            •Promouvoir une prise de conscience de la science, de l'innovation
            et de l’art.
          </p>
          <ButtonContinue link={"#junteSe"} />
        </div>
      </div>
    </div>
  );
}
