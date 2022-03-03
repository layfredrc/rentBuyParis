import { useRouter } from "next/router";
import { Button, Notification } from "@mantine/core";
import { MdInfo } from "react-icons/md";

// Components
import Card from "../card";
import Filters from "../filters";
import CalendarDates from "../calendar";

// Style
import styles from "./index.module.css";

export default function AccomodationsHub({ accomodations }) {
	const router = useRouter();
	const property = router.query.property;

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				{property == "buy" ? (
					<>
						<h1>
							Vous cherchez un bien à vendre où acheter ? RentBuyParis s’occupe
							de tout.
						</h1>
						<p>
							Si vous pensez vendre votre bien contactez-moi pour une
							estimation. Pour le service chasseur d’appartement, une avance
							forfaitaire de 1500 € est demandée pour commencer ma recherche.
						</p>
					</>
				) : (
					<h1>Trouver votre bonheur avec RentBuyParis.</h1>
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
							title="RentBuyParis est là pour vous accompagner !"
							style={{ flex: 2, padding: "20px 30px" }}
						>
							<p style={{ margin: "5px 0 20px 0" }}>
								De prochaines offres seront publiés. Vous cherchez activement à
								acheter où vendre un bien?
							</p>
							<Button
								color="dark"
								radius={0}
								size="md"
								style={{ padding: "10px 30px" }}
							>
								Prendre contact
							</Button>
						</Notification>
					</div>
				) : (
					<CalendarDates title="Quand voulez-vous venir ?" />
				)}
				<div className={styles.content}>
					<div className={styles.filters}>
						<Filters />
					</div>
					<div className={styles.accomodations}>
						<div className={styles.decoration} />
						{accomodations.data
							.filter((d) =>
								property == "buy"
									? d.attributes.isRent == false
									: d.attributes.isRent == true
							)
							.map((d) => (
								<Card data={d.attributes} id={d.id} key={d.id} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
