import styles from "./junteSe.module.css";
import { useState } from "react";
import { db } from "../../connection";
import { addDoc, collection } from "firebase/firestore";

export default function JunteSe() {
  const [email, setEmail] = useState("");

  async function handleAddEmail(e) {
    e.preventDefault();

    if (email === "") {
      alert("Remplissez le champ email.");
    }

    await addDoc(collection(db, "emails"), {
      email: email,
    })
      .then((e) => {
        setEmail("");
        alert("Merci");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div id="junteSe" className={styles.container}>
      <div className={styles.content} data-aos="zoom-in">
        <div className={styles.text}>
          <h3>SOMMET MONDIAL 2025</h3>
          <h2>rejoignez-nous à paris</h2>
          <p>
            Notez dans votre agenda les 5 et 6 avril 2025, pour un événement
            monumental à Paris, France. Avec plus de 2 millions de personnes
            impactées, le Sommet Mondial 2025 est une opportunité à ne pas
            manquer pour unir le monde à travers la science, l'innovation et
            l'art, au profit de l'autisme.
          </p>
          <form className={styles.form} onSubmit={handleAddEmail}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="COURRIER ÉLECTRONIQUE"
            />
            <button className={styles.button} type="submit">
              S'ABONNER + ÊTRE INFORMÊ
            </button>
          </form>
          <div className={styles.socials}>
            <div className={styles.social}></div>
          </div>
          <span>© VERSA CONSEILS ET ÉVÉNEMENTS. TOUS DROITS RÉSERVÉS.</span>
        </div>
      </div>
    </div>
  );
}
