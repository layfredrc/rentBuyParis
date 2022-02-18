import useSizeScreen from "../../lib/use/useSizeScreen";
import CalendarDates from "../calendar";
import HorizontalCard from "../card/horizontal";
import VerticalCard from "../card/vertical";
import styles from "./index.module.css";

const data = {
	src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80",
	name: "Joséphine",
	arrondissement: "15",
	street: "10 rue de Rivoli 75015",
	isDisponible: true,
	nbRooms: 2,
	size: 30,
	price: 1500,
};

export default function AccomodationsHub() {
	const isMobile = useSizeScreen(600);

	return (
		<div className={styles.container}>
			<div></div>
			<div className={styles.main}>
				<CalendarDates title="Quand voulez-vous venir ?" />
				<div className={styles.content}>
					<div className={styles.filters}></div>
					<div className={styles.accomodations}>
						{!isMobile ? (
							<HorizontalCard data={data} />
						) : (
							<VerticalCard data={data} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
