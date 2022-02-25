import Link from "next/link";
import { MdLanguage, MdAttachMoney, MdMenu } from "react-icons/md";

import Selector from "../selector";

import styles from "./index.module.scss";
import styled from "styled-components";
const languages = ["Français", "English", "Russian"];
const currencies = ["EUR", "USD", "RS"];

export default function Header({ setIsBurgerMenuOpened }) {
	return (
		<>
			<header className={styles["container"] + " " + styles["desktop"]}>
				<div className={styles["left"]}>
					<Link href='/'>
						<a className={styles["logo"]}>RentBuyParis</a>
					</Link>
					<RectangleBackgroundContainer>
						<RectangleBackground />
						<Link href='/accomodations?property=rent'>
							<a>Appartements à louer</a>
						</Link>
					</RectangleBackgroundContainer>

					<RectangleBackgroundContainer>
						<RectangleBackground />
						<Link href='/accomodations?property=buy'>
							<a>Biens à vendre</a>
						</Link>
					</RectangleBackgroundContainer>
				</div>
				<div className={styles["right"]}>
					<Selector
						values={languages}
						defaultValue={languages[0]}
						icon={<MdLanguage size={20} />}
					/>
					<Selector
						values={currencies}
						defaultValue={currencies[0]}
						icon={<MdAttachMoney size={20} />}
					/>
				</div>
			</header>
			<header className={styles["container"] + " " + styles["mobile"]}>
				<MdMenu
					size={25}
					style={{ marginRight: "15px" }}
					onClick={() => setIsBurgerMenuOpened(true)}
				/>
				<Link href={"/"}>
					<p className={styles["logo"]}>RentBuyParis</p>
				</Link>
			</header>
		</>
	);
}

const RectangleBackground = styled.div`
	position: absolute;
	top: 5px;
	right: 10px;
	width: 93px;
	height: 18px;
	z-index: -1;
	background-color: white;
`;

const RectangleBackgroundContainer = styled.div`
	position: relative;
	z-index: 2;
`;
