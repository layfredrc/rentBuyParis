import Link from "next/link";

import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi"
import styles from "./index.module.scss";

export default function Footer() {
	return (
		<footer className={styles["container"]}>
			<div>
				<div>
					<h2 className={styles["logo"]}>RentBuyParis</h2>
					<div>
						<HiOutlineLocationMarker size={20} style={{ marginRight: "5px" }} />
						<p>47 rue de Laborde 75008 Paris</p>
					</div>
					<div>
						<BsTelephone size={20} style={{ marginRight: "5px" }} />
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
