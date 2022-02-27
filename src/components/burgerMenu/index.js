import styles from "./index.module.scss";
import { MdClose, MdLanguage, MdAttachMoney, MdPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Selector from "../selector";

import whatsapp from "../../../public/assets/images/WhatsApp.png";
import viber from "../../../public/assets/images/Viber.png";
import telegram from "../../../public/assets/images/Telegram.png";
import signal from "../../../public/assets/images/Signal.png";
import youtube from "../../../public/assets/images/Youtube.png";

const languages = ["Français", "English", "Russian"];
const currencies = ["EUR", "USD", "RS"];

export default function BurgerMenu({ setIsBurgerMenuOpened }) {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<div className={styles.left}>
					<MdClose size={25} onClick={() => setIsBurgerMenuOpened(false)} />
					<Link href={"/"}>
						<p>RentBuyParis</p>
					</Link>
				</div>
				<div className={styles.right}>
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
			<div className={styles.content}>
				<div className={styles.navigation}>
					<p className={styles.info}>Information</p>
					<Link href={"/"}>
						<a
							className={styles.link}
							onClick={() => setIsBurgerMenuOpened(false)}>
							Accueil
						</a>
					</Link>
					<Link href='/accomodations?property=rent'>
						<a
							className={styles.link}
							onClick={() => setIsBurgerMenuOpened(false)}>
							Location d’appartement
						</a>
					</Link>
					<Link href='/accomodations?property=buy'>
						<a
							className={styles.link}
							onClick={() => setIsBurgerMenuOpened(false)}>
							Biens à vendre / chasser
						</a>
					</Link>
					<Link href='/'>
						<a
							className={styles.link}
							style={{ marginTop: "50px" }}
							onClick={() => setIsBurgerMenuOpened(false)}>
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
						<BsTelephone size={20} />
						<span>+33 6 72 64 44 44</span>
					</div>
					<div className={styles.information}>
						<AiOutlineMail size={20} />
						<span> info@rentbuyparis.com</span>
					</div>
					<div className={styles.social}>
						<Image src={telegram} />
						<Image src={youtube} />
						<Image src={whatsapp} />
						<Image src={viber} />
						<Image src={signal} />
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
