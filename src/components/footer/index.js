import Link from "next/link";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi"

// Style
import styles from "./index.module.scss";
import LogoDark from "../../../public/assets/images/Logo-dark.svg";

// Assets
import whatsapp from "../../../public/assets/images/WhatsApp.png";
import viber from "../../../public/assets/images/Viber.png";
import telegram from "../../../public/assets/images/Telegram.png";
import signal from "../../../public/assets/images/Signal.png";
import youtube from "../../../public/assets/images/Youtube.png";

export default function Footer() {
	return (
		<footer className={styles["container"]}>
			<div>
				<div>
					<Image src={LogoDark} width={150} height={100} />
					<div>
						<HiOutlineLocationMarker size={20} style={{ marginRight: "5px" }} />
						<a href="https://www.google.fr/maps/place/47+Rue+de+Laborde,+75008+Paris/@48.8754553,2.3156249,17z/data=!3m1!4b1!4m5!3m4!1s0x47e66fc98a30ee49:0xd1c80e7e1cc2e9d5!8m2!3d48.8754518!4d2.3178136"
							target="_blank" rel="noreferrer">
							47 rue de Laborde 75008 Paris
						</a>
					</div>
					<div>
						<BsTelephone size={20} style={{ marginRight: "5px" }} />
						<a href="tel:06-72-64-44-44">+33 6 72 64 44 44</a>
					</div>
					<div>
						<Image src={telegram} alt='telegram' />
						<Image src={youtube} alt='youtube' />
						<Image src={whatsapp} alt='whatsapp' />
						<Image src={viber} alt='viber' />
						<Image src={signal} alt='signal' />
					</div>
				</div>
				<div>
					<h2>Opening Time</h2>
					<div>
						<p>Monday - Friday</p>
					</div>
					<div>
						<p>11h - 23h</p>
					</div>
				</div>
				<div>
					<h2>Sitemap</h2>
					<div>
						<Link href="/accomodations/rents">
							<a>Apartment rental</a>
						</Link>
					</div>
					<div>
						<Link href="/accomodations/properties">
							<a>Properties for sale</a>
						</Link>
					</div>
					<div>
						<Link href="/#terms-and-conditions">
							<a>Terms and conditions</a>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<p>©RentBuyParis, Stephan Jaquet. All right reserved.</p>
			</div>
		</footer>
	);
}
