import styled from "styled-components";
import { bgColorPrimary } from "../../styles/colors.module.scss";
import heroImg from "../../../public/assets/images/hero.jpg";
import CalendarDates from "../calendar";
import Image from "next/image";
import Button from "../button";
import { GiHouseKeys } from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import useSizeScreen from "../../lib/use/useSizeScreen";

export default function Hero({}) {
	const isMobile = useSizeScreen();
	return (
		<>
			<HeroContainer className=''>
				<Slogan>
					<h1 className='slogan-title'>
						Locations et ventes d'appartements à <br /> <span>Paris</span>
					</h1>
				</Slogan>

				<HeroContentWrapper>
					<div className='text-content'>
						<h4>
							Appartements à louer et à vendre en plein centre de Paris, dans
							des conditions idéales et des prix convenables<span>.</span>
						</h4>

						{!isMobile && (
							<div className='buttons'>
								<Button
									title={"Location d'appartements"}
									icon={
										<MdMapsHomeWork
											size={25}
											style={{ marginRight: "15px", color: "white" }}
										/>
									}
								/>
								<Button
									title={"Biens à vendre / chasser"}
									icon={
										<GiHouseKeys
											size={25}
											style={{ marginRight: "15px", color: "white" }}
										/>
									}
									className='hero-button-right'
								/>
							</div>
						)}

						<div className='digits'>
							<h3>
								15<span>+</span>
								<br />
								<p>
									Appartements en location<span>.</span>
								</p>
							</h3>
							<h3>
								0<span>+</span>
								<br />
								<p>Appartements à vendre? On s'occupe du vôtre ! </p>
							</h3>
						</div>
					</div>
					<ImageWrapper>
						<Image
							src={heroImg}
							alt='RentBuyParis'
							layout='fill'
							className='hero-image'
						/>
					</ImageWrapper>
					<CalendarWrapper>
						<CalendarDates />
					</CalendarWrapper>
				</HeroContentWrapper>
			</HeroContainer>
		</>
	);
}

const HeroContainer = styled.div`
	background-color: ${bgColorPrimary};
	max-width: 100vw;
	padding: 2rem;

	@media screen and (max-width: 768px) {
		background-color: ${bgColorPrimary};
		padding: 2rem;
	}

	@media screen and (min-width: 768px) {
		padding: 3rem;
	}
	@media screen and (min-width: 1024px) {
		padding: 3rem;
	}

	@media screen and (min-width: 1024px) {
		padding: 3rem 3rem -0rem 3rem;
		margin-bottom: -4rem;
	}

	@media screen and (min-width: 1440px) {
		margin-bottom: -8rem;
	}
`;

const Slogan = styled.div`
	.slogan-title {
		font-size: 36px;
		font-weight: 600;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		line-height: 1.2;

		span {
			font-family: "Croissant One", cursive;
			font-weight: 400;
			line-height: 1.5;
		}

		@media screen and (max-width: 465px) {
			font-size: 25px;
		}

		@media screen and (min-width: 768px) {
			font-size: 48px;
		}
		@media screen and (min-width: 1024px) {
			font-size: 50px;
			width: 40rem;
		}
		@media screen and (min-width: 1440px) {
			font-size: 52px;
		}
	}
`;

const HeroContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	transform: translateY(-25px);
	position: relative;

	@media screen and (min-width: 1024px) {
		transform: translateY(-2rem);
	}
	@media screen and (min-width: 1440px) {
		transform: translateY(-5rem);
	}

	.text-content {
		h4 {
			margin-top: 3rem;
			font-weight: 500;
			font-size: 16px;
			width: 160px;
			@media screen and (max-width: 425px) {
				font-size: 12px;
				width: 120px;
			}

			@media screen and (min-width: 768px) {
				width: 300px;
				font-size: 18px;
			}
			@media screen and (min-width: 1024px) {
				width: 460px;
				font-size: 18px;
				margin-top: 4rem;
			}
			@media screen and (min-width: 1440px) {
				width: 380px;
				margin-top: 6rem;
			}
		}

		span {
			color: #3ea6c7;
		}

		.buttons {
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			margin-top: 2rem;

			@media screen and (max-width: 1440px) {
				font-size: 12px;
			}
		}

		.digits {
			height: 150px;
			width: 120px;
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			margin-top: 2rem;
			font-size: 24px;
			font-weight: 600;

			p {
				margin-top: 0.25rem;
				font-size: 12px;
				font-weight: 500;

				@media screen and (max-width: 425px) {
					font-size: 8px;
				}
				@media screen and (max-width: 768px) {
					font-size: 10px;
				}
				@media screen and (min-width: 768px) {
					font-size: 12px;
				}
				@media screen and (min-width: 1024px) {
					width: 250px;
					font-size: 14px;
				}
				@media screen and (min-width: 1440px) {
					width: 290px;
				}

				@media screen and (min-width: 2550px) {
				}
			}

			@media screen and (max-width: 425px) {
				margin-top: -1rem;
				font-size: 16px;
				justify-content: space-evenly;
			}

			@media screen and (max-width: 768px) {
				margin-top: -0.25rem;
				font-size: 20px;
				width: 140px;
				justify-content: space-evenly;
			}

			@media screen and (min-width: 768px) {
				width: 200px;
				font-size: 24px;
				width: 160px;
			}
			@media screen and (min-width: 1024px) {
				width: 300px;
				flex-flow: row;
			}
			@media screen and (min-width: 1440px) {
				width: 500px;
			}
		}
	}
`;

const CalendarWrapper = styled.div`
	position: absolute;
	bottom: -10rem;
	width: 100%;

	@media screen and (min-width: 768px) {
		bottom: -8rem;
	}
	@media screen and (min-width: 1024px) {
		bottom: 0rem;
	}
	@media screen and (min-width: 1440px) {
		bottom: 0rem;
	}
`;

const ImageWrapper = styled.div`
	width: 2000px;
	height: auto;
	transform: translateX(20px);
	> div {
		position: relative;
	}

	.hero-image {
		object-fit: contain;
	}

	@media screen and (min-width: 1024px) {
		transform: translate(2rem, -6rem);
		height: 400px;
	}
	@media screen and (min-width: 1440px) {
		transform: translate(2rem, -6rem);
		height: 500px;
	}
`;
