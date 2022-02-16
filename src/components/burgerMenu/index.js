import styles from "./index.module.scss";
import { MdClose, MdLanguage, MdAttachMoney, MdPhone } from "react-icons/md";
import Link from "next/link";

export default function BurgerMenu({ setIsBurgerMenuOpened }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <MdClose size={25} onClick={() => setIsBurgerMenuOpened(false)} />
          <p>RentBuyParis</p>
        </div>
        <div className={styles.right}>
          <MdLanguage size={20} onClick={() => setIsBurgerMenuOpened(false)} />
          <p>Français</p>
          <MdAttachMoney
            size={20}
            onClick={() => setIsBurgerMenuOpened(false)}
          />
          <p>EUR</p>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.navigation}>
          <p className={styles.info}>Information</p>
          <Link href="/">
            <a
              className={styles.link}
              onClick={() => setIsBurgerMenuOpened(false)}
            >
              Accueil
            </a>
          </Link>
          <Link href="/accomodations">
            <a
              className={styles.link}
              onClick={() => setIsBurgerMenuOpened(false)}
            >
              Location d’appartement
            </a>
          </Link>
          <Link href="/accomodations">
            <a
              className={styles.link}
              onClick={() => setIsBurgerMenuOpened(false)}
            >
              Biens à vendre / chasser
            </a>
          </Link>
          <Link href="/">
            <a
              className={styles.link}
              style={{ marginTop: "50px" }}
              onClick={() => setIsBurgerMenuOpened(false)}
            >
              Terms and conditions
            </a>
          </Link>
        </div>
        <div className={styles.contact}>
          <p className={styles.brand}>RentBuyParis</p>
          <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
            Stephan Jaquet
          </h2>
          <div className={styles.information}>
            <MdPhone size={20} />
            <span>+33 6 72 64 44 44</span>
          </div>
          <div className={styles.information}>
            <MdPhone size={20} />
            <span> info@rentbuyparis.com</span>
          </div>
          <div></div>
          <p>Please send a SMS if I am not answering</p>
          <p>
            47 rue de Laborde, 75008 Paris Mon – Fri: 11:00 — 18:00 (CET), Sat –
            Sun: available for a call
          </p>
        </div>
      </div>
    </div>
  );
}
