import styles from "./versa.module.css";

import versa from "../../assets/imgs/logo/versa.png";

import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export default function Versa() {
  return (
    <div className={styles.container}>
      <div className={styles.content} data-aos="zoom-in">
        <div className={styles.img}>
          <img src={versa} alt="Versa" />
        </div>
        <div className={styles.text}>
          <h2>versa consultancy and events</h2>
          <p>
            Nous sommes fiers de présenter "Conect Autismo 2024", un événement
            pionnier organisé par Versa Consultoria e Eventos. Grâce à notre
            engagement inébranlable en faveur de la qualité et de la sécurité,
            nous établissons de nouvelles normes dans le monde de
            l'événementiel.
          </p>
          <p>
            Chez Versa, nous pensons que chaque événement est une occasion
            unique de créer des expériences mémorables et marquantes. Conect
            Autismo 2024" n'est pas seulement un événement, c'est un voyage
            enrichissant qui relie les gens, les idées et les émotions.
          </p>
          <p>
            Avec une équipe spécialisée et passionnée, nous garantissons
            l'excellence dans chaque détail. De la conception à l'exécution,
            notre objectif est de fournir un environnement sûr, inclusif et
            inspirant pour tous les participants.
          </p>
          <p>
            Découvrez comment Versa Consultancy and Events peut transformer
            votre événement, votre entreprise ou votre produit. Rejoignez-nous à
            "Conect Autismo 2024" et découvrez la différence que le dévouement,
            l'innovation et le professionnalisme peuvent apporter à votre monde.
          </p>
          <p>Faites connaissance avec Versa. Transformez avec nous.</p>
          <div className={styles.buttons}>
            <a
              className={styles.button}
              href="https://www.instagram.com/versaconsultorias/"
              target="_blank"
            >
              Instagram Versa <FaInstagram />
            </a>
            <a
              className={styles.button}
              href="https://versaconsultoria.com/"
              target="_blank"
            >
              Versa Web <TbWorld />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
