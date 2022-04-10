import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

// Assets
import popupImage from "../../../public/assets/images/popup-image.jpg";
import whatsapp from "../../../public/assets/images/WhatsApp.png";
import viber from "../../../public/assets/images/Viber.png";
import telegram from "../../../public/assets/images/Telegram.png";
import signal from "../../../public/assets/images/Signal.png";
import youtube from "../../../public/assets/images/Youtube.png";
import Logo from "../../../public/assets/images/logo.svg";

// Style
import styled from "styled-components";
import stylesPopup from "../burgerMenu/index.module.scss";

export default function PopupContact() {
  return (
    <Popup>
      <Image src={popupImage}></Image>
      <div
        className={stylesPopup.contact}
        style={{ padding: "2rem", animation: "none" }}>
        <Image src={Logo} width={280} height={100} />
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginTop: "50px",
          }}>
          Stephan Jaquet
        </h2>
        <div className={stylesPopup.information}>
          <BsTelephone size={20} />
          <span>
            <a href='tel:06-72-64-44-44'>+33 6 72 64 44 44</a>
          </span>
        </div>
        <div className={stylesPopup.information}>
          <AiOutlineMail size={20} />
          <span> info@rentbuyparis.com</span>
        </div>
        <div className={stylesPopup.social}>
          <Image src={telegram} alt='telegram' />
          <Image src={youtube} alt='youtube' />
          <Image src={whatsapp} alt='whatsapp' />
          <Image src={viber} alt='viber' />
          <Image src={signal} alt='signal' />
        </div>
        <div></div>
        <p>Please send a SMS if I am not answering</p>
        <p>
          47 rue de Laborde, 75008 Paris Mon – Fri: 11:00 — 18:00 (CET), Sat –
          Sun: available for a call
        </p>
      </div>
    </Popup>
  );
}


const Popup = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;
