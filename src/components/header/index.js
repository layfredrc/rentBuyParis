import Link from "next/link";
import { MdLanguage, MdAttachMoney, MdMenu } from "react-icons/md";

import styles from "./index.module.css";
import useSizeScreen from "../../lib/use/useSizeScreen";

export default function Header() {
  const isMobile = useSizeScreen();

  return !isMobile ? (
    <header className={styles["container"]}>
      <div className={styles["left"]}>
        <h2>RentBuyParis</h2>
        <Link href="/">
          <a>Appartements à louer</a>
        </Link>
        <Link href="/">
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
    <header className={styles["container-mobile"]}>
      <MdMenu size={30} style={{ marginRight: "20px" }} />
      <p style={{ fontSize: 20 }}>RentBuyParis</p>
    </header>
  );
}
