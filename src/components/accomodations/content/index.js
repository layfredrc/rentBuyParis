import { useState, useEffect } from "react";
import { Skeleton } from "@mantine/core";

// Components
import Card from "../../card";
import Filters from "../../filters";

// Style
import styles from "./index.module.css";

export default function Content({
  accomodations,
  currency,
  currencies,
  dates,
  setDates,
  applyDatesFilter,
  setApplyDatesFilter,
}) {
  const [filteredAccomodations, setFilteredAccomodations] =
    useState(accomodations);
  const [district, setDistrict] = useState([]);
  const [priceInterval, setPriceInterval] = useState([0, 100]);
  const [parking, setParking] = useState(false);
  const [elevator, setElevator] = useState(false);
  const [garden, setGarden] = useState(false);
  const [terrace, setTerrace] = useState(false);
  const [orderBy, setOrderBy] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    var temp_filteredAccomodations = accomodations;
    temp_filteredAccomodations = temp_filteredAccomodations.filter(
      (a) =>
        a.attributes.price.value > priceInterval[0] * 100 &&
        a.attributes.price.value < priceInterval[1] * 100
    );
    if (district && district.length > 0)
      temp_filteredAccomodations = temp_filteredAccomodations.filter((a) =>
        district.includes(`${a.attributes.district}`)
      );
    if (parking)
      temp_filteredAccomodations = temp_filteredAccomodations.filter(
        (a) => a.attributes.amenities.parking
      );
    if (elevator)
      temp_filteredAccomodations = temp_filteredAccomodations.filter(
        (a) => a.attributes.amenities.elevator
      );
    if (garden)
      temp_filteredAccomodations = temp_filteredAccomodations.filter(
        (a) => a.attributes.amenities.garden
      );
    if (terrace)
      temp_filteredAccomodations = temp_filteredAccomodations.filter(
        (a) => a.attributes.amenities.terrace
      );
    if (dates && dates[0] && dates[1]) {
      temp_filteredAccomodations = temp_filteredAccomodations.filter((a) =>
        a.attributes.reservations.every(
          (reservation) =>
            (new Date(reservation.startDate) < new Date(dates[0]) &&
              new Date(reservation.endDate) < new Date(dates[0])) ||
            (new Date(reservation.startDate) > new Date(dates[1]) &&
              new Date(reservation.endDate) > new Date(dates[1]))
        )
      );
    }
    if (orderBy == "ascending")
      temp_filteredAccomodations = temp_filteredAccomodations.sort(
        (a1, a2) => a1.attributes.price.value - a2.attributes.price.value
      );
    if (orderBy == "descending")
      temp_filteredAccomodations = temp_filteredAccomodations.sort(
        (a1, a2) => a2.attributes.price.value - a1.attributes.price.value
      );

    setFilteredAccomodations(temp_filteredAccomodations);

    window.setTimeout(() => setIsLoading(false), 500);
  }, [
    district,
    priceInterval,
    parking,
    elevator,
    garden,
    terrace,
    orderBy,
    applyDatesFilter,
  ]);

  const resetFilters = () => {
    setDates([null, null]);
    setDistrict([]);
    setPriceInterval([0, 100]);
    setParking(false);
    setElevator(false);
    setGarden(false);
    setTerrace(false);
    setOrderBy("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <Filters
          district={district}
          setDistrict={setDistrict}
          priceInterval={priceInterval}
          setPriceInterval={setPriceInterval}
          parking={parking}
          setParking={setParking}
          elevator={elevator}
          setElevator={setElevator}
          garden={garden}
          setGarden={setGarden}
          terrace={terrace}
          setTerrace={setTerrace}
          resetFilters={resetFilters}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
      </div>
      <div className={styles.accomodations}>
        {isLoading ? (
          <div style={{ textAlign: "center" }}>
            <div className={styles.decoration} />
            <Skeleton animate={true} height={180} style={{ marginTop: 35 }} />
          </div>
        ) : filteredAccomodations.length == 0 ? (
          <p style={{ textAlign: "center" }}>
            Sorry, no accomodation was found.
          </p>
        ) : (
          <>
            <div className={styles.decoration} />
            {filteredAccomodations.map((d) => (
              <Card
                data={d.attributes}
                id={d.id}
                key={d.id}
                currency={currency}
                currencies={currencies}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
