import styles from "./home.module.css";

import logo from "../../assets/imgs/logo/logo.png";

import ButtonContinue from "../../components/ButtonContinue";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.img} data-aos="zoom-in">
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.text} data-aos="zoom-out">
          <h1>a venir prochainement 2025</h1>
          <h2>
            SOMMET MONDIAL 2025 <br /> UNISSANT LE MONDE À TRAVERS LA SCIENCE ET
            L'ART
          </h2>
          <p>
            Le Sommet Mondial 2025 est la plus grande réunion mondiale dédiée à
            autisme. Réunit des experts mondiaux pour discuter de l'autisme, de
            la science, de l'innovation et de l'art. Sensibilisation à l'autisme
            et récolte de fonds pour des causes sociales. Offre une plateforme
            pour l'expression artistique des personnes autistes.
          </p>
          <ButtonContinue link={"#arco"} />
        </div>
      </div>
    </div>
  );
}
