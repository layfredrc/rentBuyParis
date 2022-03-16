import { useEffect, useState } from "react";
import { useScrollLock } from "@mantine/hooks";

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

	useEffect(() => {
		isBurgerMenuOpened ? setScrollLocked(true) : setScrollLocked(false);
	}, [isBurgerMenuOpened]);

	return (
		<>
			{isBurgerMenuOpened ? (
				<BurgerMenu setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
			) : null}
			<Header setIsBurgerMenuOpened={setIsBurgerMenuOpened} />
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default MyApp;
