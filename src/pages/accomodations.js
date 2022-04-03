import Head from "next/head";
import { useRouter } from "next/router";

// Lib
import { loadAccomodations } from "../lib/loadAccomodations";

// Components
import AccomodationsHub from "../components/accomodationsHub";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../lib/animation";

const Accomodations = ({ accomodations }) => {
	const router = useRouter();
	const property = router.query.property;

	const filteredAccomodations = accomodations.data.filter((d) =>
		property == "buy"
			? d.attributes.forRent == false
			: d.attributes.forRent == true
	);

	return (
		<div>
			<Head>
				<title>RentBuyParis</title>
				<meta
					name='description'
					content='Apartments for rent and for sale in the very center of Paris, in
							ideal conditions and at reasonable prices.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<motion.main
				variants={pageAnimation}
				initial='hidden'
				animate='show'
				exit='exit'>
				<AccomodationsHub accomodations={filteredAccomodations} />
			</motion.main>
		</div>
	);
};

export async function getStaticProps() {
	const accomodations = await loadAccomodations();
	return { props: { accomodations }, revalidate: 1 };
}

export default Accomodations;
