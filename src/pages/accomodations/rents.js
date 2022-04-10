import Head from "next/head";

// Lib
import { loadRents } from "../../lib/loadRents";

// Components
import RentsHub from "../../components/accomodations/rentsHub";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../lib/animation";

const Rents = ({ rents, currency, currencies }) => {
  const rentsSortedByAvailable = rents.data.sort(
    (a1, a2) =>
      Number(a2.attributes.disponible) - Number(a1.attributes.disponible)
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
        <RentsHub
          rents={rentsSortedByAvailable}
          currency={currency}
          currencies={currencies}
        />
      </motion.main>
    </div>
  );
};

export async function getStaticProps() {
  const rents = await loadRents();
  return { props: { rents }, revalidate: 1 };
}

export default Rents;
