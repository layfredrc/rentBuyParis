import Link from "next/link";
import { MdLanguage, MdAttachMoney, MdMenu } from "react-icons/md";

import Selector from "../selector";

import styles from "./index.module.scss";

const languages = ["Français", "English", "Russian"];
const currencies = ["EUR", "USD", "RS"];

export default function Header({ setIsBurgerMenuOpened }) {
	return (
		<>
			<header className={styles["container"] + " " + styles["desktop"]}>
				<div className={styles["left"]}>
					<Link href="/">
						<a className={styles["logo"]}>RentBuyParis</a>
					</Link>
					<Link href="/accomodations?property=rent">
						<a>Appartements à louer</a>
					</Link>
					<Link href="/accomodations?property=buy">
						<a>Biens à vendre</a>
					</Link>
				</div>
				<div className={styles["right"]}>
					<Selector
						values={languages}
						defaultValue={languages[0]}
						icon={<MdLanguage size={20} />}
					/>
					<Selector
						values={currencies}
						defaultValue={currencies[0]}
						icon={<MdAttachMoney size={20} />}
					/>
				</div>
			</header>
			<header className={styles["container"] + " " + styles["mobile"]}>
				<MdMenu
					size={25}
					style={{ marginRight: "15px" }}
					onClick={() => setIsBurgerMenuOpened(true)}
				/>
				<p className={styles["logo"]}>RentBuyParis</p>
			</header>
		</>
	);
}
