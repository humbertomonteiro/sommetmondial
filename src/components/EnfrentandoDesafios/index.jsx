import styles from "./enfrentandoDesafios.module.css";

import arcoTriunfo from "../../assets/imgs/boxes/torre.jpg";

import ButtonContinue from "../ButtonContinue";

export default function EnfrentandoDesafios() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img} data-aos="fade-right">
          <img src={arcoTriunfo} alt="Admirando Paisagem" />
        </div>
        <div className={styles.text} data-aos="fade-left">
          <h3>SOMMET MONDIAL 2025</h3>
          <h2>affronter les défis de l'autisme</h2>
          <p>
            Augmentation des diagnostics, manque de compréhension et de
            sensibilisation, défis éducatifs et d'emploi, et diagnostics
            tardifs. Le Sommet Mondial 2025 aborde ces problèmes cruciaux en
            réunissant des experts pour partager des solutions innovantes et
            promouvoir une meilleure compréhension de l'autisme.
          </p>
          <ButtonContinue link={"#porqueAgora"} />
        </div>
      </div>
    </div>
  );
}
