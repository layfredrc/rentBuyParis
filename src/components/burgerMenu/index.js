import Image from "next/image";
import Link from "next/link";
import { MdClose, MdLanguage, MdAttachMoney } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

// Components
import Selector from "../selector";

// Style
import styles from "./index.module.scss";

// Assets
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
					{/* <Selector
						values={languages}
						defaultValue={languages[0]}
						icon={<MdLanguage size={20} />}
					/>
					<Selector
						values={currencies}
						defaultValue={currencies[0]}
						icon={<MdAttachMoney size={20} />}
					/> */}
				</div>
			</header>
			<div className={styles.content}>
				<div className={styles.navigation}>
					<p className={styles.info}>Information</p>
					<Link href={"/"}>
						<a
							className={styles.link}
							onClick={() => setIsBurgerMenuOpened(false)}>
							Home
						</a>
					</Link>
					<Link href='/accomodations?property=rent'>
						<a
							className={styles.link}
							onClick={() => setIsBurgerMenuOpened(false)}>
							Apartment rental
						</a>
					</Link>
					<Link href='/accomodations?property=buy'>
						<a
							className={styles.link}
							onClick={() => setIsBurgerMenuOpened(false)}>
							Properties for sale
						</a>
					</Link>
					<Link href='/#terms-and-conditions'>
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
						<span>
							<a href='tel:06-72-64-44-44'>+33 6 72 64 44 44</a>
						</span>
					</div>
					<div className={styles.information}>
						<AiOutlineMail size={20} />
						<span> info@rentbuyparis.com</span>
					</div>
					<div className={styles.social}>
						<Image src={telegram} alt='telegram' />
						<Image src={youtube} alt='youtube' />
						<Image src={whatsapp} alt='whatsapp' />
						<Image src={viber} alt='viber' />
						<Image src={signal} alt='signal' />
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
