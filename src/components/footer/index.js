import Link from "next/link";

import { MdLocationPin, MdOutlinePhone } from "react-icons/md";

import styles from "./index.module.scss";

export default function Footer() {
	return (
		<footer className={styles["container"]}>
			<div>
				<div>
					<h2 className={styles["logo"]}>RentBuyParis</h2>
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
					<div>
						<p>Lundi - Vendredi</p>
					</div>
					<div>
						<p>11h - 23h</p>
					</div>
				</div>
				<div>
					<h2>Plan du site</h2>
					<div>
						<Link href="/">
							<a>Louer un appartement</a>
						</Link>
					</div>
					<div>
						<Link href="/">
							<a>Bien à vendre</a>
						</Link>
					</div>
					<div>
						<Link href="/">
							<a>Termes et conditions</a>
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
