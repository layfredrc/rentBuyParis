import { useState } from "react";
import styles from "./index.module.scss";

export default function Button({ title, icon }) {
	return (
		<div className={styles.container}>
			{icon && icon}
			<p>{title}</p>
		</div>
	);
}
