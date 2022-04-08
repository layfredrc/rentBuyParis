import Image from "next/image";
import Link from "next/link";
import { Button } from "@mantine/core";
import {
  RiCheckboxCircleLine,
  RiHotelBedFill,
  RiCloseCircleLine,
} from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { GiResize } from "react-icons/gi";

// Style
import styled from "styled-components";

export default function Card({ data, id, vertical, currency, currencies }) {
  const photosOrdered = data.photos.data;
  const cardThumbnail = photosOrdered[0];

  return !vertical ? (
    <Link href={`/accomodation/${id}`}>
      <CardHorizontal>
        <div className='container'>
          <div style={{ flex: 1, position: "relative" }}>
            <Image
              src={cardThumbnail.attributes.url}
              layout='fill'
              objectFit='cover'
              alt='card-image'
            />
          </div>
          <div style={{ flex: 2 }}>
            <div className='informations'>
              <div>
                <p>
                  <span>{data.name}</span>, {data.district}ème arrondissement
                </p>
              </div>
              <div className='street'>
                <IoLocationSharp style={{ marginRight: "5px" }} />
                {data.street}
              </div>
              <div className='details'>
                {data.disponible ? (
                  <div style={{ color: "#15895F" }}>
                    <RiCheckboxCircleLine
                      color='#15895F'
                      style={{ marginRight: "5px" }}
                    />
                    <span>Available</span>
                  </div>
                ) : (
                  <div style={{ color: "#C52323" }}>
                    <RiCloseCircleLine
                      color='#C52323'
                      style={{ marginRight: "5px" }}
                    />
                    <span>Unavailable</span>
                  </div>
                )}

                <div>
                  <RiHotelBedFill />
                  <span>{data.guests}</span>
                </div>
                <div>
                  <GiResize />
                  <span> {data.space} m²</span>
                </div>
              </div>
            </div>
            <div className='order'>
              <div>
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: currency,
                    currencyDisplay: "symbol",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(
                    currencies.conversion_rates[currency] * data.price.value
                  )}
                </span>{" "}
                per month
              </div>
              <Button
                color='dark'
                radius={0}
                size='md'
                style={{ fontFamily: "'Montserrat',sans-serif" }}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </CardHorizontal>
    </Link>
  ) : (
    <Link href={`/accomodation/${id}`}>
      <CardVertical>
        <div className='container'>
          <div style={{ flex: 1, position: "relative" }}>
            <Image
              src={cardThumbnail.attributes.url}
              layout='fill'
              objectFit='cover'
              alt='card-image'
            />
          </div>
          <div style={{ flex: 2 }}>
            <div className='informations'>
              <div>
                <p>
                  <span>{data.name}</span>, {data.district}ème arrondissement
                </p>
              </div>
              <div className='street'>
                <IoLocationSharp style={{ marginRight: "5px" }} />
                {data.street}
              </div>
              <div className='details'>
                {data.disponible ? (
                  <div style={{ color: "#15895F" }}>
                    <RiCheckboxCircleLine
                      color='#15895F'
                      style={{ marginRight: "5px" }}
                    />
                    <span>Available</span>
                  </div>
                ) : (
                  <div style={{ color: "#C52323" }}>
                    <RiCloseCircleLine
                      color='#C52323'
                      style={{ marginRight: "5px" }}
                    />
                    <span>Unavailable</span>
                  </div>
                )}
                <div>
                  <RiHotelBedFill style={{ marginRight: "5px" }} />
                  <span>{data.guests}</span>
                </div>
                <div>
                  <GiResize style={{ marginRight: "5px" }} />
                  <span> {data.space} m²</span>
                </div>
              </div>
            </div>
            <div className='order'>
              <div>
                <span style={{ fontSize: "20px", fontWeight: "600" }}>
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: currency,
                    currencyDisplay: "symbol",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(
                    currency && currencies
                      ? currencies.conversion_rates[currency] * data.price.value
                      : data.price.value
                  )}
                </span>{" "}
                per month
              </div>
              <Button
                color='dark'
                radius={0}
                size='sm'
                style={{ fontFamily: "'Montserrat',sans-serif" }}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </CardVertical>
    </Link>
  );
}

const CardHorizontal = styled.div`
  img {
    border-radius: 5px 0px 0px 5px;
  }

  .container {
    display: flex;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin: 2rem 0;
    background-color: #fff;
    cursor: pointer;
  }
  .container > div {
    justify-content: space-between;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .container > div > div > div > p > span {
    font-family: "Croissant One", cursive;
  }
  .order {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .container > div > div > div:last-child {
    margin-bottom: 0;
  }
  .container > div {
    padding: 20px 30px;
  }
  .container > div:first-child {
    padding: 0;
  }
  .informations > div {
    margin-bottom: 15px;
  }
  .container > div > div:last-child {
    display: flex;
    justify-content: space-between;
  }
  .order {
    display: flex;
    justify-content: space-between;
  }
  .details {
    display: flex;
  }
  .details > div {
    margin-right: 15px;
    display: flex;
    align-items: center;
  }
  .details > div > span {
    margin-left: 5px;
  }
  .street {
    font-family: "Lora", serif;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    img {
      border-radius: 5px 5px 0px 0px;
    }

    .container {
      display: block;
    }
    .container > div {
      padding: 20px 20px 5px 20px;
    }
    .container > div:first-child {
      height: 16em;
    }
    .container > div {
      width: auto;
    }
    .details {
      justify-content: space-between;
    }
    .details > div {
      margin-right: 0;
    }
    .container > div > div:last-child {
      justify-content: space-around !important;
      align-items: center;
      margin-top: 20px;
    }
  }
`;

const CardVertical = styled.div`
  cursor: pointer;
  .container {
    display: block;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    margin: 15px 0;
    background-color: #fff;
    width: 100%;
  }
  .container > div {
    padding: 20px 60px 5px 20px;
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }
  .container > div > div > div > p > span {
    font-family: "Croissant One", cursive;
  }
  .informations > div {
    margin-bottom: 15px;
    width: 80%;
  }
  .order {
    margin-bottom: 10px;
    font-size: 12px;
    width: 280px;
  }
  .container > div:first-child {
    height: 16em;
  }
  .container > div {
    width: auto;
  }
  .details {
    display: flex;
    justify-content: space-between;
  }
  .details > div {
    margin-right: 0;
    display: flex;
    align-items: center;
  }
  .container > div > div:last-child {
    display: flex;
    justify-content: space-around !important;
    align-items: center;
    margin-top: 20px;
  }

  .street {
    font-family: "Lora", serif;
    font-weight: 600;
  }
`;
