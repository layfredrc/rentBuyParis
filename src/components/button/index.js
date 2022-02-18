import { DateRangePicker, DatePicker } from "@mantine/dates";
import { useState } from "react";
import styles from "./index.module.scss";

export default function Button({ title }) {
	return (
		<div className={styles.container}>
			<p>{title}</p>
		</div>
	);
}
