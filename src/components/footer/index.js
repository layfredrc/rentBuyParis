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
						<a href="tel:06-72-64-44-44">+33 6 72 64 44 44</a>
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
						<Link href="/">
							<a>Apartment rental</a>
						</Link>
					</div>
					<div>
						<Link href="/">
							<a>Properties for sale</a>
						</Link>
					</div>
					<div>
						<Link href="/">
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
