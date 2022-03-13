import { useState } from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { RangeCalendar } from "@mantine/dates";
import { Modal, Button, Group } from "@mantine/core";

// Style
import styled from "styled-components";
import styles from "../burgerMenu/index.module.scss";

// Assets
import popupImage from "../../../public/assets/images/popup-image.jpg";
import whatsapp from "../../../public/assets/images/WhatsApp.png";
import viber from "../../../public/assets/images/Viber.png";
import telegram from "../../../public/assets/images/Telegram.png";
import signal from "../../../public/assets/images/Signal.png";
import youtube from "../../../public/assets/images/Youtube.png";

export default function AccomodationCalendar({ accomodation }) {
	const [value, setValue] = useState([
		new Date(2021, 11, 1),
		new Date(2021, 11, 5),
	]);
	const [opened, setOpened] = useState(false);

	const reservedDates = [];
	accomodation.attributes.reservations.forEach((reservation) => {
		const startDate = reservation.startDate;
		const endDate = reservation.endDate;
		const dateMove = new Date(startDate);
		let strDate = startDate;

		while (strDate < endDate) {
			strDate = dateMove.toISOString().slice(0, 10);
			reservedDates.push(strDate);
			dateMove.setDate(dateMove.getDate() + 1);
		}
	});

	const monthDiff = (d1, d2) => {
		var months;
		months = (d2.getFullYear() - d1.getFullYear()) * 12;
		months -= d1.getMonth();
		months += d2.getMonth();
		return months <= 0 ? 0 : months;
	};

	const dayDiff = (d1, d2) => {
		var time_difference = d2.getTime() - d1.getTime();
		return time_difference / (1000 * 60 * 60 * 24);
	};

	return (
		<Wrapper>
			<AccomodationCalendarContainer>
				<div className='header'>
					<h4 className='price'>{accomodation?.attributes?.price?.value}€</h4>{" "}
					<p>per {accomodation?.attributes?.price?.regularity}</p>
				</div>
				<hr />
				<div className='title'>
					<h5>RentBuyParis</h5>
				</div>

				<CalendarWrapper>
					<RangeCalendar
						value={value}
						onChange={setValue}
						excludeDate={(date) =>
							reservedDates.includes(date.toISOString().slice(0, 10))
						}
						allowLevelChange={false}
					/>
				</CalendarWrapper>
				<Recap>
					<h6 className='total-header'>Total</h6>
					<div className='total'>
						<h6 className='nights'>
							{value[0] && value[1] ? monthDiff(value[0], value[1]) + 1 : 0}{" "}
							month{value[0] && value[1] ? "s" : ""}
						</h6>{" "}
						<p className='total'>
							{value[0] && value[1]
								? (monthDiff(value[0], value[1]) + 1) *
								  accomodation?.attributes?.price?.value
								: 0}
							€
						</p>
					</div>
					<hr />
					<Group position='center'>
						<Modal
							opened={opened}
							size='90%'
							onClose={() => setOpened(false)}
							hideCloseButton
							padding={0}
							radius={0}>
							<Popup>
								<Image src={popupImage}></Image>

								<div
									className={styles.contact}
									style={{ padding: "2rem", animation: "none" }}>
									<p className={styles.brand}>RentBuyParis</p>
									<h2 style={{ fontSize: "20px", fontWeight: "700" }}>
										Stephan Jaquet
									</h2>
									<div className={styles.information}>
										<BsTelephone size={20} />
										<span>
											<a href='tel:06-72-64-44-44'>+33 6 72 64 44 44</a>
										</span>
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
							Book Now
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
`;
