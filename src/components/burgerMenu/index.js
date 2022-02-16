import styles from "./index.module.scss";
import { MdClose, MdLanguage, MdAttachMoney } from "react-icons/md";

export default function BurgerMenu({ setIsBurgerMenuOpened }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <MdClose size={25} onClick={() => setIsBurgerMenuOpened(false)} />
          <p style={{ fontSize: 20 }}>RentBuyParis</p>
        </div>
        <div className={styles.right}>
          <MdLanguage size={25} onClick={() => setIsBurgerMenuOpened(false)} />
          <p>Français</p>
          <MdAttachMoney
            size={25}
            onClick={() => setIsBurgerMenuOpened(false)}
          />
          <p>EUR</p>
        </div>
      </header>
      <p>INFORMATION</p>
      <p>Accueil</p>
      <p>Location d’appartement</p>
      <p>Biens à vendre / chasser</p>
      <p>Terms and conditions</p>
      <h1>rentBuyParis</h1>
      <h2>Stephan Jaquet</h2>
      <div></div>
      <div></div>
      <div></div>
      <p>Please send a SMS if I am not answering</p>
      <p>
        47 rue de Laborde, 75008 Paris Mon – Fri: 11:00 — 18:00 (CET), Sat –
        Sun: available for a call
      </p>
    </div>
  );
}
