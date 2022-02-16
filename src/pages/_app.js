import { useState } from "react";
import BurgerMenu from "../components/burgerMenu";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  return (
    <>
      {isBurgerMenuOpened ? (
        <BurgerMenu setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
      ) : null}
      <Header setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
