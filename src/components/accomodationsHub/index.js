import useSizeScreen from "../../lib/use/useSizeScreen";
import Button from "../button";
import CalendarDates from "../calendar";
import styles from "./index.module.css";

import { MdFilterAlt } from "react-icons/md";
import Card from "../card";

const data = [
	{
		id: 1,
		src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80",
		name: "Joséphine",
		arrondissement: "15",
		street: "10 rue de Rivoli 75015",
		isDisponible: true,
		nbRooms: 2,
		size: 30,
		price: 1500,
	},
	{
		id: 2,
		src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80",
		name: "Joséphine",
		arrondissement: "15",
		street: "10 rue de Rivoli 75015",
		isDisponible: true,
		nbRooms: 2,
		size: 30,
		price: 1500,
	},
	{
		id: 3,
		src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80",
		name: "Joséphine",
		arrondissement: "15",
		street: "10 rue de Rivoli 75015",
		isDisponible: true,
		nbRooms: 2,
		size: 30,
		price: 1500,
	},
	{
		id: 4,
		src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80",
		name: "Joséphine",
		arrondissement: "15",
		street: "10 rue de Rivoli 75015",
		isDisponible: true,
		nbRooms: 2,
		size: 30,
		price: 1500,
	},
	{
		id: 5,
		src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80",
		name: "Joséphine",
		arrondissement: "15",
		street: "10 rue de Rivoli 75015",
		isDisponible: true,
		nbRooms: 2,
		size: 30,
		price: 1500,
	},
];

export default function AccomodationsHub() {
	const isMobile = useSizeScreen(600);

	return (
		<div className={styles.container}>
			<div></div>
			<div className={styles.main}>
				<CalendarDates title="Quand voulez-vous venir ?" />
				<div className={styles.content}>
					<div className={styles.filters}>
						{isMobile ? (
							<Button
								title="Appliquer des filtres"
								padding="15px"
								icon={<MdFilterAlt color="white" size={18} />}
							/>
						) : (
							<></>
						)}
					</div>
					<div className={styles.accomodations}>
						{data.map((d) => (
							<Card data={d} key={d.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
