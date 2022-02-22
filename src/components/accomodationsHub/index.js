import useSizeScreen from "../../lib/use/useSizeScreen";
import CustomButton from "../button";
import CalendarDates from "../calendar";
import styles from "./index.module.css";

import { MdFilterAlt } from "react-icons/md";
import Card from "../card";
import Filter from "../filter";
import { Checkbox, NumberInput, RangeSlider } from "@mantine/core";

export default function AccomodationsHub({ rents }) {
	const isMobile = useSizeScreen(1023);

	const marks = [
		{ value: 0, label: "0€" },
		{ value: 100, label: "100k€" },
	];

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Trouver votre bonheur avec RentBuyParis.</h1>
			</div>
			<div className={styles.main}>
				<CalendarDates title="Quand voulez-vous venir ?" />
				<div className={styles.content}>
					<div className={styles.filters}>
						<div>
							<CustomButton
								title="Appliquer des filtres"
								padding="15px"
								icon={<MdFilterAlt color="white" size={18} />}
							/>
						</div>
						{!isMobile && (
							<>
								<Filter title="Quartier">
									<div style={{ display: "flex" }}>
										<NumberInput defaultValue={0} required hideControls />
										<span
											style={{ minWidth: "max-content", alignSelf: "center" }}
										>
											ème arr (Trocadéro)
										</span>
									</div>
								</Filter>
								<Filter title="Prix">
									<RangeSlider
										defaultValue={[20, 80]}
										marks={marks}
										color="#3EA6C7"
										label={(value) => `${value}k €`}
										styles={(theme) => ({
											label: {
												backgroundColor: theme.white,
												color: theme.black,
											},
										})}
									/>
								</Filter>
								<Filter title="Capacité">
									<Checkbox
										checked={false}
										label="1 personne"
										style={{ marginBottom: "10px" }}
									/>
									<Checkbox
										checked={false}
										label="2 personnes"
										style={{ marginBottom: "10px" }}
									/>
									<Checkbox
										checked={false}
										label="3 personnes"
										style={{ marginBottom: "10px" }}
									/>
									<Checkbox
										checked={false}
										label="4 personnes"
										style={{ marginBottom: "10px" }}
									/>
								</Filter>
								<Filter title="Général">
									<Checkbox
										checked={false}
										label="Parking"
										style={{ marginBottom: "10px" }}
									/>
									<Checkbox
										checked={false}
										label="Ascenseur"
										style={{ marginBottom: "10px" }}
									/>
									<Checkbox
										checked={false}
										label="Animaux autorisés"
										style={{ marginBottom: "10px" }}
									/>
									<Checkbox
										checked={false}
										label="Terrasses / Balcons"
										style={{ marginBottom: "10px" }}
									/>
								</Filter>
							</>
						)}
					</div>
					<div className={styles.accomodations}>
						<div className={styles.decoration} />
						{rents.data.map((d) => (
							<Card data={d.attributes} key={d.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
