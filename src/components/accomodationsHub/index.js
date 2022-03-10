import { useRouter } from "next/router";
import { Button, Notification } from "@mantine/core";
import { MdInfo } from "react-icons/md";
import { useState, useEffect } from "react";

// Components
import Card from "../card";
import Filters from "../filters";
import CalendarDates from "../calendar";

// Style
import styles from "./index.module.css";

export default function AccomodationsHub({ accomodations }) {
	const router = useRouter();
	const property = router.query.property;

	const [filteredAccomodations, setFilteredAccomodations] = useState([]);
	const [district, setDistrict] = useState(null);
	const [priceInterval, setPriceInterval] = useState([0, 100]);
	const [parking, setParking] = useState(false);
	const [elevator, setElevator] = useState(false);
	const [garden, setGarden] = useState(false);
	const [terrace, setTerrace] = useState(false);

	useEffect(() => {
		var temp_filteredAccomodations = accomodations;

		temp_filteredAccomodations = temp_filteredAccomodations.filter(
			(a) =>
				a.attributes.price.value > priceInterval[0] * 1000 &&
				a.attributes.price.value < priceInterval[1] * 1000
		);
		if (district)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.district.toString() == district
			);
		if (parking)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.amenities.parking
			);
		if (elevator)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.amenities.elevator
			);
		if (garden)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.amenities.garden
			);
		if (terrace)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.amenities.terrace
			);

		setFilteredAccomodations(temp_filteredAccomodations);
	}, [district, priceInterval, parking, elevator, garden, terrace]);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				{property == "buy" ? (
					<>
						<h1>
							Are you looking for a property to sell or buy? <br /> RentBuyParis
							takes care of everything.
						</h1>
						<p>
							If you are looking to sell your property contact me for an
							estimation. For the apartment hunter service, a lump sum advance
							of €1500 is requested to start my search.
						</p>
					</>
				) : (
					<h1>Find the perfect place to stay with RentBuyParis.</h1>
				)}
			</div>
			<div className={styles.main}>
				{property == "buy" ? (
					<div className={styles.notification}>
						<div style={{ flex: 1 }}></div>
						<Notification
							icon={<MdInfo size={30} />}
							disallowClose
							color="#359DD9"
							title="RentBuyParis is here to support you!"
							style={{ flex: 2, padding: "20px 30px" }}
						>
							<p style={{ margin: "5px 0 20px 0" }}>
								New offers will be published. Are you actively looking to buy or
								sell a property?
							</p>
							<Button
								color="dark"
								radius={0}
								size="md"
								style={{
									padding: "10px 30px",
									fontFamily: "'Montserrat',sans-serif",
								}}
							>
								Contact Me
							</Button>
						</Notification>
					</div>
				) : (
					<CalendarDates title="Quand voulez-vous venir ?" />
				)}
				<div className={styles.content}>
					<div className={styles.filters}>
						<Filters
							district={district}
							setDistrict={setDistrict}
							priceInterval={priceInterval}
							setPriceInterval={setPriceInterval}
							parking={parking}
							setParking={setParking}
							elevator={elevator}
							setElevator={setElevator}
							garden={garden}
							setGarden={setGarden}
							terrace={terrace}
							setTerrace={setTerrace}
						/>
					</div>
					<div className={styles.accomodations}>
						<div className={styles.decoration} />
						{filteredAccomodations.map((d) => (
							<Card data={d.attributes} id={d.id} key={d.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
