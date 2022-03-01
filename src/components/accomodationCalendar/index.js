import styled from "styled-components";
import styles from "../burgerMenu/index.module.scss";
import { useState } from "react";
import { RangeCalendar } from "@mantine/dates";
import { Modal, Button, Group } from "@mantine/core";
import Image from "next/image";

import popupImage from "../../../public/assets/images/popup-image.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import whatsapp from "../../../public/assets/images/WhatsApp.png";
import viber from "../../../public/assets/images/Viber.png";
import telegram from "../../../public/assets/images/Telegram.png";
import signal from "../../../public/assets/images/Signal.png";
import youtube from "../../../public/assets/images/Youtube.png";

export default function AccomodationCalendar({ }) {
	const [value, setValue] = useState([
		new Date(2021, 11, 1),
		new Date(2021, 11, 5),
	]);
	const [opened, setOpened] = useState(false);
	return (
		<Wrapper>
			<AccomodationCalendarContainer>
				<div className='header'>
					<h4 className='price'>55€</h4> <p>per night</p>
				</div>
				<hr />
				<div className='title'>
					<h5>RentBuyParis</h5>
				</div>

				<CalendarWrapper>
					<RangeCalendar value={value} onChange={setValue} />
				</CalendarWrapper>
				<Recap>
					<h6 className='total-header'>Total</h6>
					<div className='total'>
						<h6 className='nights'>2 nights</h6> <p className='total'>110€</p>
					</div>
					<hr />
					<Group position='center'>
						<Modal opened={opened} size='90%' onClose={() => setOpened(false)} hideCloseButton padding={0} radius={0}>
							<Popup>
								<Image src={popupImage}></Image>

								<div className={styles.contact} style={{ padding: "2rem" }}>
									<p className={styles.brand}>RentBuyParis</p>
									<h2 style={{ fontSize: "20px", fontWeight: "700" }}>
										Stephan Jaquet
									</h2>
									<div className={styles.information}>
										<BsTelephone size={20} />
										<span>+33 6 72 64 44 44</span>
									</div>
									<div className={styles.information}>
										<AiOutlineMail size={20} />
										<span> info@rentbuyparis.com</span>
									</div>
									<div className={styles.social}>
										<Image src={telegram} alt='telegram' />
										<Image src={youtube} alt='youtube' />
										<Image src={whatsapp} alt='whatsapp' />
										<Image src={viber} alt='viber' />
										<Image src={signal} alt='signal' />
									</div>
									<div></div>
									<p>Please send a SMS if I am not answering</p>
									<p>
										47 rue de Laborde, 75008 Paris Mon – Fri: 11:00 — 18:00
										(CET), Sat – Sun: available for a call
									</p>
								</div>
							</Popup>
						</Modal>
						<Button
							color='dark'
							style={{
								fontFamily: "'Montserrat',sans-serif",
								marginTop: "1rem",
							}}
							onClick={() => setOpened(true)}>
							Contacter le propriétaire
						</Button>
					</Group>
				</Recap>
			</AccomodationCalendarContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	padding: 1rem;
	width: min-content;
`;

const AccomodationCalendarContainer = styled.div`
	background-color: white;
	border: 1px solid #d5d5d5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	.header {
		padding: 1rem;
		display: flex;

		.price {
			margin-left: 15px;
			font-size: 18px;
			font-weight: 600;
		}

		p {
			font-size: 11px;
			font-weight: 600;
			margin-left: 10px;
			line-height: 2;
		}
	}

	.title {
		margin-top: 2rem;
		h5 {
			display: flex;
			justify-content: center;
			font-family: "Croissant One", cursive;
			font-size: 20px;
		}
	}
`;

const CalendarWrapper = styled.div`
	margin-top: 1rem;
	padding: 1rem;
`;

const Recap = styled.div`
	padding: 2rem;

	.total-header {
		font-size: 20px;
		font-weight: bold;
		letter-spacing: 2.5px;
		text-transform: uppercase;
		color: #2385be;
		margin-bottom: 1rem;
	}

	.total {
		display: flex;
		justify-content: space-between;
		font-weight: 500;
	}
`;

const Popup = styled.div`
	@media screen and (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
	}
`