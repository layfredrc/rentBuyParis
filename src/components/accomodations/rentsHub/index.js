import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Components
import CalendarDates from "../../calendar";
import Content from "../content";

// Style
import styles from "./index.module.css";

export default function RentsHub({ rents, currency, currencies }) {
  const router = useRouter();
  const [dates, setDates] = useState([null, null]);
  const [applyDatesFilter, setApplyDatesFilter] = useState(false);

  useEffect(() => {
    if (router.query.enter && router.query.out) {
      setDates([new Date(router.query.enter), new Date(router.query.out)]);
      setApplyDatesFilter(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Find the perfect place to stay with RentBuyParis.</h1>
      </div>
      <div className={styles.main}>
        <CalendarDates
          dates={dates}
          setDates={setDates}
          title='When would you like to stay in Paris ?'
          onValidate={() => setApplyDatesFilter(!applyDatesFilter)}
        />
        <Content
          accomodations={rents}
          currencies={currencies}
          currency={currency}
          dates={dates}
          setDates={setDates}
          applyDatesFilter={applyDatesFilter}
          setApplyDatesFilter={setApplyDatesFilter}
        />
      </div>
    </div>
  );
}
