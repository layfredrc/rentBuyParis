import { useEffect, useState } from "react";
import { useScrollLock } from "@mantine/hooks";
import loadCurrencies from "../lib/loadCurrencies";

// Components
import BurgerMenu from "../components/burgerMenu";
import Footer from "../components/footer";
import Header from "../components/header";

// Style
import "../styles/globals.scss";

// Animation
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [scrollLocked, setScrollLocked] = useScrollLock();
  const [currency, setCurrency] = useState("EUR");
  const [currencies, setCurrencies] = useState({
    conversion_rates: { EUR: 1 },
  });

  useEffect(async () => {
    const currencies = await loadCurrencies();
    setCurrencies(currencies);
  }, []);

  useEffect(() => {
    isBurgerMenuOpened ? setScrollLocked(true) : setScrollLocked(false);
  }, [isBurgerMenuOpened]);

  return (
    <>
      {isBurgerMenuOpened ? (
        <BurgerMenu
          setIsBurgerMenuOpened={setIsBurgerMenuOpened}
          currency={currency}
          setCurrency={setCurrency}
        />
      ) : null}
      <Header
        setIsBurgerMenuOpened={setIsBurgerMenuOpened}
        currency={currency}
        setCurrency={setCurrency}
      />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} currency={currency} currencies={currencies} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
