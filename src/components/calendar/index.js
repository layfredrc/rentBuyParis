import { Button } from "@mantine/core";
import { DateRangePicker, DatePicker } from "@mantine/dates";
import { GiExitDoor, GiEntryDoor } from "react-icons/gi";
import { useState } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import styles from "./index.module.scss";
import styled from "styled-components";

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
					<DatePickerDesktopContainer>
						<DateRangePicker
							placeholder='Check-in - Check-out'
							rightSection={<BsCalendarWeek size={20} />}
							size='md'
							radius='0px'
							value={value}
							onChange={setValue}
							amountOfMonths={2}
							fullWidth
						/>
					</DatePickerDesktopContainer>
					<DatePickerMobileContainer>
						<DatePicker
							placeholder='Check-in'
							rightSection={<GiEntryDoor size={20} />}
							radius='0px'
							size='md'
							required
							defaultValue={value[0] ? new Date(value[0]) : null}
							onChange={(date) => setValue([date, value[1]])}
						/>
						<DatePicker
							placeholder='Check-out'
							rightSection={<GiExitDoor size={20} />}
							size='md'
							radius='0px'
							defaultValue={value[1] ? new Date(value[1]) : null}
							onChange={(date) => setValue([value[0], date])}
						/>
					</DatePickerMobileContainer>
				</div>
				<Button
					color='dark'
					radius={0}
					size='md'
					className={styles.calendarButton}
					onClick={() => {
						redirection &&
							router.push(
								`/accomodations?property=rent&enter=${value[0]}&out=${value[1]}`
							);
					}}
					fullWidth
					style={{ flex: 1 }}>
					Search
				</Button>
			</div>
		</div>
	);
}

const DatePickerMobileContainer = styled.div`
	display: none;
	flex-direction: column;
	@media (max-width: 600px) {
		display: block;
	}
`;

const DatePickerDesktopContainer = styled.div`
	@media (max-width: 600px) {
		display: none;
	}
`;
