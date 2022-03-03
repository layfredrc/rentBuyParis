import { Button } from "@mantine/core";
import { DatePicker, DateRangePicker } from "@mantine/dates";
import { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

export default function CalendarDates({ title, redirection }) {
	const router = useRouter();

	const [value, setValue] = useState([
		router.query.enter ? new Date(router.query.enter) : null,
		router.query.out ? new Date(router.query.out) : null,
	]);
	return (
		<div className={styles.container}>
			<h2 style={title ? { marginBottom: "15px" } : {}}>{title}</h2>
			<div>
				<div style={{ flex: 4 }}>
					<DateRangePicker
						placeholder='Date de voyage'
						rightSection={<AiFillCar size={20} />}
						size='md'
						radius='0px'
						value={value}
						onChange={setValue}
						amountOfMonths={2}
						fullWidth
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
					fullWidth
					style={{ flex: 1 }}
				>
					Chercher
				</Button>
			</div>
		</div>
	);
}
