import Head from "next/head";

// Lib
import { loadProperties } from "../../lib/loadProperties";

// Components
import PropertiesHub from "../../components/accomodations/propertiesHub";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../../lib/animation";

const Properties = ({ properties, currency, currencies }) => {
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
        <PropertiesHub
          properties={properties.data}
          currency={currency}
          currencies={currencies}
        />
      </motion.main>
    </div>
  );
};

export async function getStaticProps() {
  const properties = await loadProperties();
  return { props: { properties }, revalidate: 1 };
}

export default Properties;
