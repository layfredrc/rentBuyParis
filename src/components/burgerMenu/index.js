import styles from "./index.module.scss";
import { MdClose, MdLanguage, MdAttachMoney, MdPhone } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const langagues = ["Français", "English", "Russian"];
const currencies = ["EUR", "USD", "RS"];

export default function BurgerMenu({ setIsBurgerMenuOpened }) {
  const [isLanguageSelectionOpened, setIsLanguageSelectionOpened] =
    useState(false);
  const [isCurrencySelectionOpened, setIsCurrencySelectionOpened] =
    useState(false);
  const [language, setLanguage] = useState(langagues[0]);
  const [currency, setCurrency] = useState(currencies[0]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <MdClose size={25} onClick={() => setIsBurgerMenuOpened(false)} />
          <p>RentBuyParis</p>
        </div>
        <div className={styles.right}>
          <div
            onClick={() =>
              setIsLanguageSelectionOpened(
                isLanguageSelectionOpened ? false : true
              )
            }
          >
            <MdLanguage size={20} />
            <p>{language}</p>
          </div>
          {isLanguageSelectionOpened && (
            <div className={styles.select}>
              {langagues
                .filter((lang) => lang != language)
                .map((lang) => (
                  <p
                    onClick={() => {
                      setLanguage(lang);
                      setIsLanguageSelectionOpened(false);
                    }}
                  >
                    {lang}
                  </p>
                ))}
            </div>
          )}
          <div
            onClick={() =>
              setIsCurrencySelectionOpened(
                isCurrencySelectionOpened ? false : true
              )
            }
          >
            <MdAttachMoney size={20} />
            <p>{currency}</p>
            {isCurrencySelectionOpened && (
              <div className={styles.select}>
                {currencies
                  .filter((curr) => curr != currency)
                  .map((curr) => (
                    <p
                      onClick={() => {
                        setCurrency(curr);
                        setIsCurrencySelectionOpened(false);
                      }}
                    >
                      {curr}
                    </p>
                  ))}
              </div>
            )}
          </div>
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
