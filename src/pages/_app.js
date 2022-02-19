import { useEffect, useState } from "react";
import BurgerMenu from "../components/burgerMenu";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.scss";
import { useScrollLock } from "@mantine/hooks";

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
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
