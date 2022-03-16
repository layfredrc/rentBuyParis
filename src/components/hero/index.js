import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@mantine/core";
import { GiHouseKeys } from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import Link from "next/link";

// Components
import CalendarDates from "../calendar";

// Assets
import heroImg from "../../../public/assets/images/hero.jpg";

// Style
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";

export default function Hero({ nbRents, nbGoods }) {
	const router = useRouter();

	const [dates, setDates] = useState([null, null]);

	return (
		<>
			<HeroContainer>
				<Slogan>
					<motion.h1
						variants={titleAnim}
						initial='hidden'
						animate='show'
						className='slogan-title'>
						<span className='title'>
							Rentals and sales of apartments in <br />
						</span>
						<span className='paris'>Paris</span>
					</motion.h1>
				</Slogan>

				<HeroContentWrapper>
					<div className='text-content'>
						<motion.h2 variants={fade}>
							Apartments for rent and for sale in the very center of Paris, in
							ideal conditions and at reasonable prices.
						</motion.h2>

						<ButtonContainerDesktop variants={fade}>
							<Link href={"/accomodations?property=rent"}>
								<Button
									size='sm'
									color='dark'
									radius={0}
									className='hero-button-desktop'
									leftIcon={<MdMapsHomeWork size={15} />}>
									Apartment <br /> rental
								</Button>
							</Link>
							<Link href={"/accomodations?property=buy"}>
								<Button
									size='sm'
									color='dark'
									radius={0}
									className='hero-button-desktop'
									leftIcon={<GiHouseKeys size={15} />}>
									Properties for sale
								</Button>
							</Link>
						</ButtonContainerDesktop>

						<motion.div variants={titleAnim} className='digits'>
							<h3>
								{nbRents}
								<span>+</span>
								<br />
								<p>
									Apartments for rent<span>.</span> <br />
									(One month minimum rentals)
								</p>
							</h3>
							<h3>
								{nbGoods}
								<span>+</span>
								<br />
								<p>
									Properties for sale ? <br />
									<Link href='/accomodations?property=buy'>
										<a style={{ textDecoration: "underline" }}>
											We take care of yours !
										</a>
									</Link>
								</p>
							</h3>
						</motion.div>
					</div>
					<ImageWrapper variants={fade}>
						<Image
							src={heroImg}
							alt='RentBuyParis'
							layout='fill'
							className='hero-image'
							priority
						/>
					</ImageWrapper>
					<ButtonContainerMobile>
						<Link href={"/accomodations?property=rent"}>
							<Button
								size='xs'
								color='dark'
								radius={0}
								leftIcon={<MdMapsHomeWork size={15} />}
								className='hero-button-mobile'>
								Apartment <br /> rental
							</Button>
						</Link>
						<Link href={"/accomodations?property=buy"}>
							<Button
								size='xs'
								color='dark'
								radius={0}
								leftIcon={<GiHouseKeys size={15} />}
								className='hero-button-mobile'>
								Properties <br /> for sale
							</Button>
						</Link>
					</ButtonContainerMobile>
					<CalendarWrapper>
						<CalendarDates
							dates={dates}
							setDates={setDates}
							title={"When would you like to stay in Paris ?"}
							onValidate={() => {
								dates[0] && dates[1]
									? router.push(
											`/accomodations?property=rent&enter=${dates[0]}&out=${dates[1]}`
									  )
									: null;
							}}
						/>
					</CalendarWrapper>
				</HeroContentWrapper>
			</HeroContainer>
		</>
	);
}

const HeroContainer = styled.div`
	background-color: #e5f9ff;
	max-width: 100vw;

	@media screen and (max-width: 768px) {
		background-color: #e5f9ff;
		padding: 2rem 2rem 0rem 2rem;
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
		margin-bottom: -9rem;
	}
`;

const Slogan = styled.div`
	.slogan-title {
		font-size: 36px;
		font-weight: 600;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		line-height: 1.2;
		overflow: hidden;

		.paris {
			font-family: "Croissant One", cursive;
			font-weight: 400;
			line-height: 1.5;
			overflow: hidden;
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
		height: 350px;
	}
	@media screen and (min-width: 1440px) {
		height: 400px;
		transform: translateY(-5rem);
	}

	.text-content {
		height: min-content;
		h2 {
			margin-top: 3rem;
			font-weight: 500;
			font-size: 16px;
			width: 100%;
			@media screen and (max-width: 425px) {
				font-size: 12px;
			}

			@media screen and (min-width: 768px) {
				width: 320px;
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

		.digits span {
			color: #3ea6c7;
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
					width: 260px;
					font-size: 14px;
				}
				@media screen and (min-width: 1440px) {
					width: 300px;
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
	bottom: -16.5rem;
	width: 100%;

	@media screen and (min-width: 600px) {
		bottom: -11rem;
	}

	@media screen and (min-width: 768px) {
		bottom: -8.5rem;
	}

	@media screen and (min-width: 1024px) {
		bottom: -6rem;
	}
	@media screen and (min-width: 1440px) {
		bottom: -4.5rem;
	}

	@media screen and (min-width: 2550px) {
		bottom: -8.5rem;
	}
`;

const ImageWrapper = styled(motion.div)`
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
		transform: translate(2rem, -11rem);
		height: 500px;
	}
	@media screen and (min-width: 1440px) {
		transform: translate(2rem, -9rem);
	}
	@media screen and (min-width: 2560px) {
		transform: translate(4rem, -10rem);
		height: 600px;
	}
`;

const ButtonContainerDesktop = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	margin-top: 2rem;

	@media screen and (max-width: 599px) {
		display: none;
	}

	@media screen and (min-width: 768px) {
		.hero-button-desktop {
			width: 150px;
			font-size: 9px;
			font-family: "Montserrat", sans-serif;
		}
	}

	@media screen and (min-width: 1024px) {
		.hero-button-desktop {
			width: 200px;
			font-size: 11px;
			font-family: "Montserrat", sans-serif;
			br {
				display: none;
			}
		}
	}
`;

const ButtonContainerMobile = styled.div`
	position: absolute;
	bottom: -5rem;
	display: flex;
	justify-content: space-between;
	width: 100%;

	.hero-button-mobile {
		width: 120px;
		height: 40px;
		font-size: 8px;

		font-family: "Montserrat", sans-serif;
	}

	@media screen and (min-width: 320px) {
		font-size: 8px;
	}

	@media screen and (min-width: 375px) {
		font-size: 8px;

		.hero-button-mobile {
			width: 140px;
			font-size: 10px;
		}
	}
	@media screen and (min-width: 425px) {
		bottom: -6rem;

		font-size: 9px;
		justify-content: space-around;
		.hero-button-mobile {
			width: 150px;
			height: 50px;
			font-size: 10px;
		}
	}

	@media screen and (min-width: 600px) {
		display: none;
	}

	@media screen and (max-width: 1440px) {
	}
`;
