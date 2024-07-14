import styles from "./arcoTriunfo.module.css";

import arcoTriunfo from "../../assets/imgs/boxes/box1.jpg";

import ButtonContinue from "../ButtonContinue";

export default function ArcoTriunfo() {
  return (
    <div id="arco" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img} data-aos="fade-left">
          <img src={arcoTriunfo} alt="Arco do Triunfo" />
        </div>
        <div className={styles.text} data-aos="fade-right">
          <h3>SOMMET MONDIAL 2025</h3>
          <h2>bienvenue au sommet mondial 2025</h2>
          <p>
            Découvrez le plus grand rassemblement mondial dédié à l'autisme, où
            science, innovation et art se rencontrent pour sensibiliser et
            soutenir les causes sociales. Rejoignez-nous pour une expérience
            transformatrice offrant une plateforme d'expression artistique aux
            personnes autistes.
          </p>
          <ButtonContinue link={"#ingresso"} />
        </div>
      </div>
    </div>
  );
}
