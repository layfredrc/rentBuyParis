import { Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { GiExitDoor, GiEntryDoor } from "react-icons/gi";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

export default function CalendarDates({ title, redirection }) {
	const router = useRouter();

	const [value, setValue] = useState([
		router.query.enter ?? null,
		router.query.out ?? null,
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
						defaultValue={value[0] ? new Date(value[0]) : null}
						onChange={(date) => setValue([date, value[1]])}
					/>
					<DatePicker
						placeholder="Date de sortie"
						rightSection={<GiExitDoor size={20} />}
						size="md"
						radius="0px"
						defaultValue={value[1] ? new Date(value[1]) : null}
						onChange={(date) => setValue([value[0], date])}
					/>
				</div>
				<Button
					color="dark"
					radius={0}
					size="md"
					className={styles.calendarButton}
					onClick={() => {
						redirection &&
							router.push(
								`/accomodations?property=rent&enter=${value[0]}&out=${value[1]}`
							);
					}}
				>
					Chercher
				</Button>
			</div>
		</div>
	);
}
