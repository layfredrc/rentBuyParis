import Image from "next/image";

import {
	RiMapPin2Line,
	RiCheckboxCircleLine,
	RiHotelBedFill,
} from "react-icons/ri";
import { GiResize } from "react-icons/gi";
import Button from "../../button";
import Apartment from "../../../../public/assets/images/image 2.png";

import styles from "./index.module.scss";
import Link from "next/link";

export default function VerticalCard({ data }) {
	return (
		<Link href={`/accomodation/${data.id}`}>
			<div className={styles["container"]}>
				<Image src={Apartment} />
				<div>
					<div>
						<div>
							<p>
								<span>{data.name}</span>, {data.arrondissement}ème
								arrondissement
							</p>
						</div>
						<div>
							<RiMapPin2Line size={20} style={{ marginRight: "5px" }} />
							<span>{data.street}</span>
						</div>
						<div className={styles.details}>
							<div style={{ color: "#15895F" }}>
								<RiCheckboxCircleLine color="#15895F" size={20} />
								<span>{data.isDisponible ? "Disponible" : "Indisponible"}</span>
							</div>
							<div>
								<RiHotelBedFill size={20} />
								<span>{data.nbRooms} chambres</span>
							</div>
							<div>
								<GiResize size={20} />
								<span> {data.size} m²</span>
							</div>
						</div>
					</div>
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<span
								style={{
									fontSize: "20px",
									fontWeight: "600",
									marginRight: "5px",
								}}
							>
								{data.price}€
							</span>
							par mois
						</div>
						<Button title="Réserver" />
					</div>
				</div>
			</div>
		</Link>
	);
}
