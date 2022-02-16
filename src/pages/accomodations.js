import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import AccomodationsHub from "../components/accomodationsHub";
import styles from "../styles/Home.module.scss";

export default function Accomodations() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RentBuyParis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AccomodationsHub />
      </main>
    </div>
  );
}