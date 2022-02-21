import { DateRangePicker, DatePicker } from "@mantine/dates";
import { useState } from "react";
import { GiExitDoor, GiEntryDoor } from "react-icons/gi";
import Button from "../button";
import styles from "./index.module.scss";

export default function CalendarDates({ title }) {
	const [value, setValue] = useState([
		new Date(2021, 11, 1),
		new Date(2021, 11, 5),
	]);
	return (
		<div className={styles.container}>
			<h2 style={title ? { marginBottom: "15px" } : {}}>{title}</h2>
			<div>
				<div>
					<DatePicker
						placeholder="Date d'entrée"
						rightSection={<GiEntryDoor size={20} />}
						radius="0px"
						size="md"
						required
					/>
					<DateRangePicker
						placeholder="Date de sortie"
						rightSection={<GiExitDoor size={20} />}
						size="md"
						radius="0px"
						onChange={setValue}
					/>
				</div>
				<Button title="Chercher" padding="0px 5%" />
			</div>
		</div>
	);
}
