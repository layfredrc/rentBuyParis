import styles from "./index.module.scss";

export default function Button({ title, icon, padding }) {
	return (
		<div
			className={styles.container}
			style={padding ? { padding: padding } : {}}
		>
			{icon ? icon : null}
			<p style={icon && { marginLeft: "5px" }}>{title}</p>
		</div>
	);
}
