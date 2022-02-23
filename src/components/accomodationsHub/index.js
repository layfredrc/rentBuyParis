// Components
import Card from "../card";
import Filters from "../filters";
import CalendarDates from "../calendar";

// Style
import styles from "./index.module.css";

export default function AccomodationsHub({ rents }) {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>Trouver votre bonheur avec RentBuyParis.</h1>
			</div>
			<div className={styles.main}>
				<CalendarDates title="Quand voulez-vous venir ?" />
				<div className={styles.content}>
					<div className={styles.filters}>
						<Filters />
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
