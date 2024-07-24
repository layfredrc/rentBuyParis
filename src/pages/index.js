import Head from "next/head";
import { useState, useEffect } from "react"
import { useRouter } from 'next/router';
// Lib
import { loadAccomodations } from "../lib/loadAccomodations";

// Components
import Hero from "../components/hero";
import SectionText from "../components/sectionText";
import SectionAvailableNow from "../components/sectionAvailableNow";
import CalendarDates from '../components/calendar';
// Style
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../lib/animation";

const Home = ({ rents, error, currency, currencies }) => {
	if (error) {
		return <div>An error occured: { error.message }</div>;
	}
	console.log(rents);

	const [bgIndex, setBgIndex] = useState(0);
	const router = useRouter();

	const [dates, setDates] = useState([null, null]);

	const bgImages = [
		"/assets/images/slider1.jpeg",
		"/assets/images/background.jpg",
		"/assets/images/slider3.jpg",
		"/assets/images/slider4.jpeg",
		"/assets/images/slider5.jpg",
		"/assets/images/slider6.jpg",
		"/assets/images/slider7.jpg",
		// Add more image URLs here
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
		}, 8000); // Change image every 5 seconds

		return () => clearInterval(interval); // Clear interval on component unmount
	}, [bgImages.length]);

	return (
		<>
			<Head>
				<title>RentBuyParis | Rentals and sales of apartments in Paris</title>
				<meta
					name='description'
					content='Apartments for rent and for sale in the very center of Paris, in
							ideal conditions and at reasonable prices.'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
				<link rel='manifest' href='/site.webmanifest' />
				<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
				<meta name='msapplication-TileColor' content='#da532c' />
				<meta name='theme-color' content='#ffffff' />
			</Head>
			<motion.div
				variants={ pageAnimation }
				initial='hidden'
				animate='show'
				exit='exit'>
				<HeroWrapper bgImage={ bgImages[bgIndex] }>
					<Hero
						nbRents={ rents?.data?.filter((d) => d.attributes.forRent).length }
						nbGoods={ rents?.data?.filter((d) => !d.attributes.forRent).length }
					/>
				</HeroWrapper>
				<CalendarDates
					dates={ dates }
					setDates={ setDates }
					title={ "When would you like to stay in Paris ?" }
					onValidate={ () => {
						dates[0] && dates[1]
							? router.push(
								`/accomodations/rents?enter=${dates[0]}&out=${dates[1]}`
							)
							: null;
					} }
				/>
				<SectionAvailableNow
					rents={ rents }
					currency={ currency }
					currencies={ currencies }
				/>
				<SectionText />
			</motion.div>
		</>
	);
};

export async function getStaticProps () {
	const accomodations = await loadAccomodations();
	return { props: { rents: accomodations }, revalidate: 1 };
}

const HeroWrapper = styled.div`
	background-image: url(${(props) => props.bgImage});
	background-size: cover;
	background-position: top center;
	object-fit: cover;
	background-position: top center;;
	animation: fadeIn 3s ease-out;
	transition: background-image 0.8s ease-out;
	height: 100vh;
	padding: 10rem 2rem 0rem 2rem;
	@media screen and (min-width: 768px) {
		padding: 10rem 2rem 0rem 2rem;
	}

	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1440px) {
		padding: 12rem 12rem 0rem 12rem;
	}
	@media screen and (min-width: 1800px) {
		padding: 18rem 20rem 0rem 20rem;
	}

	@media screen and (min-width: 2100px) {
		padding: 0rem 24rem 0rem 24rem;
	}

	@media screen and (min-width: 2550px) {
		padding: 0rem 30rem 0rem 30rem;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 0.5;
		}

		100% {
			opacity: 1;
		}
	}
`;

const CalendarWrapper = styled.div`
  position: absolute;
  width: 100%;
  color: black;
  bottom: 0;
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
    bottom: -20.5rem;
  }

  @media screen and (min-width: 2550px) {
    bottom: -8.5rem;
  }
`;



export default Home;
