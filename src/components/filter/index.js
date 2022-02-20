import styles from "./index.module.scss";

export default function Filter(props) {
	const title = props.title;

	return (
		<div className={styles.container}>
			<p>{title}</p>
			{props.children}
		</div>
	);
}
