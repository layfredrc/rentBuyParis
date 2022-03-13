import { Button } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import { BsCalendarWeek } from "react-icons/bs";

// Styles
import styles from "./index.module.scss";
import styled from "styled-components";


export default function CalendarDates({ dates, setDates, title, onValidate }) {
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
							value={dates}
							onChange={setDates}
							amountOfMonths={2}
							fullWidth
						/>
					</DatePickerDesktopContainer>
					<DatePickerMobileContainer>
						<DateRangePicker
							placeholder='Check-in - Check-out'
							rightSection={<BsCalendarWeek size={20} />}
							size='md'
							radius='0px'
							value={dates}
							onChange={setDates}
							amountOfMonths={1}
						/>
					</DatePickerMobileContainer>
				</div>
				<Button
					color='dark'
					radius={0}
					size='md'
					className={styles.calendarButton}
					onClick={() => onValidate()}
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
