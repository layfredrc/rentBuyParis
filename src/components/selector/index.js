import { useState } from "react";

// Style
import styles from "./index.module.scss";

export default function Selector({ values, defaultValue, icon }) {
	const [isOpened, setIsOpened] = useState(false);
	const [selectedValue, setSelectedValue] = useState(defaultValue);

	return (
		<div className={styles.container}>
			<div
				onClick={() => setIsOpened(isOpened ? false : true)}
				style={{ display: "flex", alignItems: "center" }}
			>
				{icon}
				<p>{selectedValue}</p>
			</div>
			{isOpened && (
				<div className={styles.select}>
					{values
						.filter((val) => val != selectedValue)
						.map((val) => (
							<p
								onClick={() => {
									setSelectedValue(val);
									setIsOpened(false);
								}}
							>
								{val}
							</p>
						))}
				</div>
			)}
		</div>
	);
}
