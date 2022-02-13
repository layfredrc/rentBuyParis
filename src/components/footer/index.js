import Link from "next/link";

import { MdLocationPin, MdOutlinePhone } from "react-icons/md";

import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles["container"]}>
      <div>
        <div>
          <h2>RentBuyParis</h2>
          <div>
            <MdLocationPin size={20} />
            <p style={{ marginBlock: "auto" }}>47 rue de Laborde 75008 Paris</p>
          </div>
          <div>
            <MdOutlinePhone size={20} />
            <p>+33672644444</p>
          </div>
        </div>
        <div>
          <h2>Horaires</h2>
          <p>Lundi - Vendredi</p>
          <p>11h - 23h</p>
        </div>
        <div>
          <h2>Plan du site</h2>
          <Link href="/">
            <a>Louer un appartement</a>
          </Link>
          <Link href="/">
            <a>Bien à vendre</a>
          </Link>
          <Link href="/">
            <a>Termes et conditions</a>
          </Link>
        </div>
      </div>
      <div>
        <p>©RentBuyParis, Stephan Jaquet. All right reserved.</p>
      </div>
    </footer>
  );
}
