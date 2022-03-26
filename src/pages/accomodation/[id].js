import Head from "next/head";
import { useRouter } from "next/router";

// Lib
import { loadAccomodation } from "../../lib/loadAccomodation";
import { loadAccomodations } from "../../lib/loadAccomodations";
import { motion } from "framer-motion";
import { pageAnimation } from "../../lib/animation";
// Components
import AccomodationDetail from "../../components/accomodation";
import { Skeleton } from "@mantine/core";



const Accomodation = ({ accomodation }) => {
	const router = useRouter();
	if (router.isFallback) {
		return (
			<>
				<Skeleton height={50} circle mb='xl' />
				<Skeleton height={8} radius='xl' />
				<Skeleton height={8} mt={6} radius='xl' />
				<Skeleton height={8} mt={6} width='70%' radius='xl' />
			</>
		);
	}

	return (
		<>
			<Head>
				<title>RentBuyParis</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
				<AccomodationDetail accomodation={accomodation} />
			</motion.div>
		</>
	);
};

export async function getStaticProps({ params }) {
	const accomodation = await loadAccomodation(params.id);
	return { props: { accomodation }, revalidate: 1, };
}

export async function getStaticPaths() {
	const accomodations = await loadAccomodations();
	const paths = accomodations?.data.map((item) => {
		return { params: { id: `${item.id}` } };
	});

	return {
		paths,
		fallback: true,
	};
}

export default Accomodation;
