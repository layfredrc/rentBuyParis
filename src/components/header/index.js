import Link from "next/link";
import { MdLanguage, MdAttachMoney, MdMenu } from "react-icons/md";

import styles from "./index.module.scss";
import useSizeScreen from "../../lib/use/useSizeScreen";

export default function Header() {
  const isMobile = useSizeScreen();

  return !isMobile ? (
    <header className={styles["container"]}>
      <div className={styles["left"]}>
        <Link href="/">
          <h2 className={styles["logo"]}>RentBuyParis</h2>
        </Link>
        <Link href="/accomodations">
          <a>Appartements à louer</a>
        </Link>
        <Link href="/accomodations">
          <a>Biens à vendre</a>
        </Link>
      </div>
      <div className={styles["right"]}>
        <div>
          <MdLanguage size={20} />
          <p>Français</p>
        </div>
        <div>
          <MdAttachMoney size={20} />
          <p>Euro</p>
        </div>
      </div>
    </header>
  ) : (
    <header className={styles["container"]}>
      <MdMenu size={30} style={{ marginRight: "20px" }} />
      <p style={{ fontSize: 20 }}>RentBuyParis</p>
    </header>
  );
}
