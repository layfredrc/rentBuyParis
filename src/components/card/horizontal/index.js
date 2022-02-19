import Image from "next/image";
import Link from "next/link";

import {
	RiMapPin2Line,
	RiCheckboxCircleLine,
	RiHotelBedFill,
} from "react-icons/ri";
import { GiResize } from "react-icons/gi";
import Button from "../../button";

import styles from "./index.module.scss";

export default function HorizontalCard({ data }) {
	return (
		<Link href={`/accomodation/${data.id}`}>
			<div className={styles["container"]}>
				<img src={data.src} />
				<div>
					<div>
						<div>
							<p>
								<span>{data.name}</span>, {data.arrondissement}ème
								arrondissement
							</p>
						</div>
						<div>
							<RiMapPin2Line />
							{data.street}
						</div>
						<div className={styles.details}>
							<div style={{ color: "#15895F" }}>
								<RiCheckboxCircleLine color="#15895F" />
								<span>{data.isDisponible ? "Disponible" : "Indisponible"}</span>
							</div>
							<div>
								<RiHotelBedFill />
								<span>{data.nbRooms} chambres</span>
							</div>
							<div>
								<GiResize />
								<span> {data.size} m²</span>
							</div>
						</div>
					</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<span style={{ fontSize: "20px", fontWeight: "600" }}>
								{data.price}€
							</span>{" "}
							par mois
						</div>
						<Button title="Réserver" />
					</div>
				</div>
			</div>
		</Link>
	);
}
