import Image from "next/image";
import Link from "next/link";

import {
	RiMapPin2Line,
	RiCheckboxCircleLine,
	RiHotelBedFill,
} from "react-icons/ri";
import { GiResize } from "react-icons/gi";
import Button from "../button";

import styles from "./index.module.scss";

export default function Card({ data, key }) {
	return (
		<Link href={`/accomodation/${key}`}>
			<div className={styles["container"]}>
				<div style={{ flex: 1, position: "relative" }}>
					{data.photos.data.map((photo) => (
						<Image
							src={`${process.env.NEXT_PUBLIC_URL}${photo.attributes.url}`}
							layout="fill"
							objectFit="cover"
						/>
					))}
				</div>
				<div style={{ flex: 2 }}>
					<div className={styles.informations}>
						<div>
							<p>
								<span>{data.name}</span>, {data.district}ème arrondissement
							</p>
						</div>
						<div>
							<RiMapPin2Line style={{ marginRight: "5px" }} />
							{data.street}
						</div>
						<div className={styles.details}>
							<div style={{ color: "#15895F" }}>
								<RiCheckboxCircleLine color="#15895F" />
								<span>{data.isDisponible ? "Disponible" : "Indisponible"}</span>
							</div>
							<div>
								<RiHotelBedFill />
								<span>{data.space}</span>
							</div>
							<div>
								<GiResize />
								<span> {data.size} m²</span>
							</div>
						</div>
					</div>
					<div className={styles.order}>
						<div>
							<span style={{ fontSize: "20px", fontWeight: "600" }}>
								{data.price.value}€
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
