import styles from "./Ingresso.module.css";

import { FaShoppingCart } from "react-icons/fa";

export default function Ingresso() {
  return (
    <div id="ingresso" className={styles.container}>
      <div className={styles.title} data-aos="zoom-in">
        <h2>INGRESSES</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.lists}>
          <div
            className={styles.list}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <h3>Prévente Exclusive</h3>
            <ul>
              <li>Avantages du Sommet Mondial 2025</li>
              <li>Date : 5 et 6 Avril 2025</li>
              <li>
                Conférenciers de Renom - Plus de 40 experts internationaux.
              </li>
              <li>Savoir Actualisé - Dernières recherches, méthodes.</li>
              <li>Réseau Global - Connexions internationales précieuses.</li>
              <li>
                Conscience et Inclusion - Promotion de la diversité,
                acceptation.
              </li>
              <li>
                Innovation et Solutions - Nouvelles technologies, approches
                thérapeutiques.
              </li>
              <li>
                Art et Expression - Valorisation de la créativité autistique.
              </li>
              <li>
                Développement Professionnel - Ateliers, conférences
                spécialisées.
              </li>
              <li>Impact Social - Influence sur les politiques publiques.</li>
              <li>Ressources Accessibles - Outils pratiques, académiques.</li>
              <li>
                Kit Conférencier - Matériel exclusif, avantages supplémentaires.
              </li>
            </ul>
            <div className={styles.buttons}>
              <a href="" target="_blank" className={styles.button}>
                <FaShoppingCart /> BIENTÔT DISPONIBLE
              </a>
            </div>
          </div>

          <div
            className={styles.list}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <h3>Vente de Billets</h3>
            <ul>
              <li>Avantages du Sommet Mondial 2025</li>
              <li>Date : 5 et 6 Avril 2025</li>
              <li>
                Conférenciers de Renom - Plus de 40 experts internationaux.
              </li>
              <li>Savoir Actualisé - Dernières recherches, méthodes.</li>
              <li>Réseau Global - Connexions internationales précieuses.</li>
              <li>
                Conscience et Inclusion - Promotion de la diversité,
                acceptation.
              </li>
              <li>
                Innovation et Solutions - Nouvelles technologies, approches
                thérapeutiques.
              </li>
              <li>
                Art et Expression - Valorisation de la créativité autistique.
              </li>
              <li>
                Développement Professionnel - Ateliers, conférences
                spécialisées.
              </li>
              <li>Impact Social - Influence sur les politiques publiques.</li>
              <li>Ressources Accessibles - Outils pratiques, académiques.</li>
              <li>
                Kit Conférencier - Matériel exclusif, avantages supplémentaires.
              </li>
            </ul>
            <div className={styles.buttons}>
              <a href="" className={styles.button}>
                <FaShoppingCart /> BIENTÔT DISPONIBLE
              </a>
            </div>
          </div>

          <div
            className={styles.list}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <h3>Vente de Fête</h3>
            <ul>
              <li>Bientôt Disponible</li>
            </ul>
            <div className={styles.buttons}>
              <a href="" className={styles.button}>
                <FaShoppingCart /> BIENTÔT DISPONIBLE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
