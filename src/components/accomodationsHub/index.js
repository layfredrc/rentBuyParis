import CalendarDates from "../calendar";
import styles from "./index.module.css";

export default function AccomodationsHub() {
	return (
		<div className={styles.container}>
			<CalendarDates title="Quand voulez-vous venir ?" />
		</div>
	);
}
