import { useState } from "react";
import { Button, Notification, Modal, Group } from "@mantine/core";

// Components
import Content from "../content";
import PopupContact from "../../popup";

// Style
import styles from "./index.module.css";

export default function PropertiesHub({ properties, currency, currencies }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Are you looking for a property to sell or buy? <br /> RentBuyParis
          takes care of everything.
        </h1>
        <p>
          If you are looking to sell your property contact me for an estimation.
          For the apartment hunter service, a lump sum advance of €1500 is
          requested to start my search.
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.notification}>
          <div style={{ flex: 1 }}></div>
          <Notification
            disallowClose
            style={{
              flex: 2,
              padding: "1rem 2rem",
            }}>
            <div className=''>
              <h1
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "20px",
                  fontWeight: "600",
                }}>
                RentBuyParis is here to support you !
              </h1>
              <p
                style={{
                  fontFamily: "'Montserrat',sans-serif",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#899599",
                  marginTop: "10px",
                }}>
                New offers will be published. <br />
                Are you actively looking to buy or sell a property?
                <br />
                We can hunt property depending on your preferences.
              </p>
              <Group position='start'>
                <Modal
                  opened={opened}
                  size='90%'
                  onClose={() => setOpened(false)}
                  hideCloseButton
                  padding={0}
                  radius={0}>
                  <PopupContact />
                </Modal>
                <Button
                  color='dark'
                  style={{
                    fontFamily: "'Montserrat',sans-serif",
                    marginTop: "1rem",
                  }}
                  onClick={() => setOpened(true)}>
                  Contact Me
                </Button>
              </Group>
            </div>
          </Notification>
        </div>
        <Content
          accomodations={properties}
          currencies={currencies}
          currency={currency}
        />
      </div>
    </div>
  );
}
