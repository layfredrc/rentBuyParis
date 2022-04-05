import Head from "next/head";

// Lib
import { loadAccomodations } from "../lib/loadAccomodations";

// Components
import Hero from "../components/hero";
import SectionText from "../components/sectionText";
import SectionAvailableNow from "../components/sectionAvailableNow";

// Style
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../lib/animation";

const Home = ({ rents, error }) => {
	if (error) {
		return <div>An error occured: {error.message}</div>;
	}

	return (
		<>
			<Head>
				<title>RentBuyParis | Rentals and sales of apartments in Paris</title>
				<meta name="description" content="Apartments for rent and for sale in the very center of Paris, in
							ideal conditions and at reasonable prices." />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
				<HeroWrapper>
					<Hero
						nbRents={rents.data.filter((d) => d.attributes.forRent).length}
						nbGoods={rents.data.filter((d) => !d.attributes.forRent).length}
					/>
				</HeroWrapper>
				<SectionAvailableNow rents={rents} />
				<SectionText />
			</motion.div>

		</>
	);
};

export async function getStaticProps() {
	const accomodations = await loadAccomodations();
	return { props: { rents: accomodations }, revalidate: 1 };

}

const HeroWrapper = styled.div`
	@media screen and (min-width: 768px) {
		background-color: #e5f9ff;
		padding: 0rem 2rem 0rem 2rem;
	}

	@media screen and (min-width: 1024px) {
	}
	@media screen and (min-width: 1440px) {
		padding: 0rem 12rem 0rem 12rem;
	}
	@media screen and (min-width: 1800px) {
		padding: 0rem 20rem 0rem 20rem;
	}

	@media screen and (min-width: 2100px) {
		padding: 0rem 24rem 0rem 24rem;
	}

	@media screen and (min-width: 2550px) {
		padding: 0rem 30rem 0rem 30rem;
	}
`;

export default Home;
