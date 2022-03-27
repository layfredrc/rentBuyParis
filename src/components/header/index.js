import Link from "next/link";
import { MdLanguage, MdAttachMoney, MdMenu } from "react-icons/md";

// Components
import Selector from "../selector";

// Style
import styles from "./index.module.scss";
import styled from "styled-components";

import Image from "next/image";
import Logo from "../../../public/assets/images/logo.svg";

const languages = ["Français", "English", "Russian"];
const currencies = ["EUR", "USD", "RS"];

export default function Header({ setIsBurgerMenuOpened }) {
	return (
		<>
			<header className={styles["container"] + " " + styles["desktop"]}>
				<div className={styles["left"]}>
					<Link href='/'>
						<a>
							<Image src={Logo} width={180} height={70} />
						</a>
					</Link>
					<RectangleBackgroundContainer>
						<RectangleBackground />
						<Link href='/accomodations?property=rent'>
							<a>Apartments for rent</a>
						</Link>
					</RectangleBackgroundContainer>

					<RectangleBackgroundContainer>
						<RectangleBackground />
						<Link href='/accomodations?property=buy'>
							<a>Properties for sale</a>
						</Link>
					</RectangleBackgroundContainer>
				</div>
				<div className={styles["right"]}>
					{/* <Selector
						values={languages}
						defaultValue={languages[0]}
						icon={<MdLanguage size={20} />}
					/>
					<Selector
						values={currencies}
						defaultValue={currencies[0]}
						icon={<MdAttachMoney size={20} />}
					/> */}
				</div>
			</header>
			<header className={styles["container"] + " " + styles["mobile"]}>
				<MdMenu
					size={25}
					style={{ marginRight: "15px" }}
					onClick={() => setIsBurgerMenuOpened(true)}
				/>
				<div className='logoMobile'>
					<Link href='/'>
						<a>
							<Image src={Logo} width={100} height={70} objectFit='contain' />
						</a>
					</Link>
				</div>
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
