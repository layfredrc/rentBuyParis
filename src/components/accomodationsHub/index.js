import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, Notification, Modal, Group } from "@mantine/core";
import { AiOutlineMail } from "react-icons/ai";
import { FcInfo } from "react-icons/fc";
import { BsTelephone } from "react-icons/bs";

// Components
import Card from "../card";
import Filters from "../filters";
import CalendarDates from "../calendar";
import Image from "next/image";

// Assets
import popupImage from "../../../public/assets/images/popup-image.jpg";
import whatsapp from "../../../public/assets/images/WhatsApp.png";
import viber from "../../../public/assets/images/Viber.png";
import telegram from "../../../public/assets/images/Telegram.png";
import signal from "../../../public/assets/images/Signal.png";
import youtube from "../../../public/assets/images/Youtube.png";

// Style
import styled from "styled-components";
import styles from "./index.module.css";
import stylesPopup from "../burgerMenu/index.module.scss";

export default function AccomodationsHub({ accomodations }) {
	const router = useRouter();
	const property = router.query.property;
	const [opened, setOpened] = useState(false);

	const [dates, setDates] = useState([
		router.query.enter ? new Date(router.query.enter) : null,
		router.query.out ? new Date(router.query.out) : null,
	]);

	const [filteredAccomodations, setFilteredAccomodations] =
		useState(accomodations);
	const [district, setDistrict] = useState(null);
	const [priceInterval, setPriceInterval] = useState([0, 100]);
	const [parking, setParking] = useState(false);
	const [elevator, setElevator] = useState(false);
	const [garden, setGarden] = useState(false);
	const [terrace, setTerrace] = useState(false);

	useEffect(() => {
		var temp_filteredAccomodations = filteredAccomodations;

		temp_filteredAccomodations = temp_filteredAccomodations.filter(
			(a) =>
				a.attributes.price.value > priceInterval[0] * 1000 &&
				a.attributes.price.value < priceInterval[1] * 1000
		);
		if (district)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.district.toString() == district
			);
		if (parking)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.amenities.parking
			);
		if (elevator)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.amenities.elevator
			);
		if (garden)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.amenities.garden
			);
		if (terrace)
			temp_filteredAccomodations = temp_filteredAccomodations.filter(
				(a) => a.attributes.amenities.terrace
			);

		setFilteredAccomodations(temp_filteredAccomodations);
	}, [district, priceInterval, parking, elevator, garden, terrace]);

	const applyDatesFilter = () => {
		var temp_filteredAccomodations = accomodations;

		if (dates[0] && dates[1])
			temp_filteredAccomodations = temp_filteredAccomodations.filter((a) =>
				a.attributes.reservations.every(
					(reservation) =>
						(new Date(reservation.startDate) < new Date(dates[0]) &&
							new Date(reservation.endDate) < new Date(dates[0])) ||
						(new Date(reservation.startDate) > new Date(dates[1]) &&
							new Date(reservation.endDate) > new Date(dates[1]))
				)
			);

		setFilteredAccomodations(temp_filteredAccomodations);
	};

	useEffect(() => {
		applyDatesFilter();
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				{property == "buy" ? (
					<>
						<h1>
							Are you looking for a property to sell or buy? <br /> RentBuyParis
							takes care of everything.
						</h1>
						<p>
							If you are looking to sell your property contact me for an
							estimation. For the apartment hunter service, a lump sum advance
							of €1500 is requested to start my search.
						</p>
					</>
				) : (
					<h1>Find the perfect place to stay with RentBuyParis.</h1>
				)}
			</div>
			<div className={styles.main}>
				{property == "buy" ? (
					<div className={styles.notification}>
						<div style={{ flex: 1 }}></div>
						<Notification
							disallowClose
							style={{
								flex: 2,
								padding: "1rem 2rem",
							}}>
							<div className=''>
								<h1
									style={{
										fontFamily: "'Montserrat',sans-serif",
										fontSize: "20px",
										fontWeight: "600",
									}}>
									RentBuyParis is here to support you !
								</h1>
								<p
									style={{
										fontFamily: "'Montserrat',sans-serif",
										fontSize: "14px",
										fontWeight: "500",
										color: "#899599",
										marginTop: "10px",
									}}>
									New offers will be published. <br />
									Are you actively looking to buy or sell a property?
									<br />
									We can hunt property depending on your preferences.
								</p>
								<Group position='start'>
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
												className={stylesPopup.contact}
												style={{ padding: "2rem", animation: "none" }}>
												<p className={styles.brand}>RentBuyParis</p>
												<h2 style={{ fontSize: "20px", fontWeight: "700" }}>
													Stephan Jaquet
												</h2>
												<div className={stylesPopup.information}>
													<BsTelephone size={20} />
													<span>
														<a href='tel:06-72-64-44-44'>+33 6 72 64 44 44</a>
													</span>
												</div>
												<div className={stylesPopup.information}>
													<AiOutlineMail size={20} />
													<span> info@rentbuyparis.com</span>
												</div>
												<div className={stylesPopup.social}>
													<Image src={telegram} alt='telegram' />
													<Image src={youtube} alt='youtube' />
													<Image src={whatsapp} alt='whatsapp' />
													<Image src={viber} alt='viber' />
													<Image src={signal} alt='signal' />
												</div>
												<div></div>
												<p>Please send a SMS if I am not answering</p>
												<p>
													47 rue de Laborde, 75008 Paris Mon – Fri: 11:00 —
													18:00 (CET), Sat – Sun: available for a call
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
										Contact Me
									</Button>
								</Group>
							</div>
						</Notification>
					</div>
				) : (
					<CalendarDates
						dates={dates}
						setDates={setDates}
						title='Quand voulez-vous venir ?'
						onValidate={() => applyDatesFilter()}
					/>
				)}
				<div className={styles.content}>
					<div className={styles.filters}>
						<Filters
							district={district}
							setDistrict={setDistrict}
							priceInterval={priceInterval}
							setPriceInterval={setPriceInterval}
							parking={parking}
							setParking={setParking}
							elevator={elevator}
							setElevator={setElevator}
							garden={garden}
							setGarden={setGarden}
							terrace={terrace}
							setTerrace={setTerrace}
						/>
					</div>
					<div className={styles.accomodations}>
						<div className={styles.decoration} />
						{filteredAccomodations.map((d) => (
							<Card data={d.attributes} id={d.id} key={d.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const Popup = styled.div`
	@media screen and (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
	}
`;
