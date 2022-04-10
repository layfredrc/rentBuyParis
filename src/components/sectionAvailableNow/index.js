import { useEffect } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "@mantine/core";

// Components
import Card from "../card";

// Style
import styled from "styled-components";

export default function SectionAvailableNow({ rents, currency, currencies }) {
  const availableRents = rents.data.filter(
    (rent) => rent.attributes.disponible && rent.attributes.forRent
  );

  const scrollHorizontally = (e) => {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    var scrollingDiv = document.getElementsByClassName(
      "scrolling-wrapper-flexbox"
    )[0];
    if (
      !(
        (scrollingDiv.scrollWidth -
          scrollingDiv.scrollLeft -
          scrollingDiv.clientWidth ==
          0 &&
          delta == -1) ||
        (scrollingDiv.scrollLeft == 0 && delta == 1)
      )
    ) {
      scrollingDiv.scrollLeft -= delta * 200; // Multiplied by 40
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (
      document.getElementsByClassName("scrolling-wrapper-flexbox")[0]
        .addEventListener
    ) {
      // IE9, Chrome, Safari, Opera
      document
        .getElementsByClassName("scrolling-wrapper-flexbox")[0]
        .addEventListener("mousewheel", scrollHorizontally);
      // Firefox
      document
        .getElementsByClassName("scrolling-wrapper-flexbox")[0]
        .addEventListener("DOMMouseScroll", scrollHorizontally);
    } else {
      // IE 6/7/8
      document
        .getElementsByClassName("scrolling-wrapper-flexbox")[0]
        .attachEvent("onmousewheel", scrollHorizontally);
    }
  }, []);

  return (
    <SectionAvailableNowContainer>
      <h3 className='sectionHeaderTitle'>
        <span>🔑</span> Available Now
      </h3>

      <div className='sectionHeader'>
        <h1 className='sectionTitle'>Available apartments</h1>

        <Link href={"/accomodations/rents"}>
          <div className='exploreAll'>
            Explore All{" "}
            <BsArrowRight size={20} style={{ transform: "translateY(5px)" }} />
          </div>
        </Link>
      </div>
      <div className='scrolling-wrapper-flexbox'>
        {availableRents.map((d) => (
          <Card
            data={d.attributes}
            id={d.id}
            vertical
            key={d.id}
            currency={currency}
            currencies={currencies}
          />
        ))}
      </div>

      <ButtonMobileContainer>
        <Link href={"/accomodations/rents"}>
          <Button
            size='md'
            variant='default'
            radius={0}
            className='hero-button-mobile'>
            Explore All
          </Button>
        </Link>
      </ButtonMobileContainer>
    </SectionAvailableNowContainer>
  );
}

const SectionAvailableNowContainer = styled.div`
  background-color: white;
  margin-top: 4rem;
  padding: 2rem 2rem 3rem 2rem;

  @media screen and (min-width: 320px) {
    margin-top: 16rem;
  }
  @media screen and (min-width: 425px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 5rem;
    padding: 5rem;
  }
  @media screen and (min-width: 1440px) {
    padding: 5rem 15rem 5rem 15rem;
  }

  @media screen and (min-width: 1800px) {
    padding: 5rem 20rem 5rem 20rem;
  }

  @media screen and (min-width: 2100px) {
    padding: 5rem 24rem 5rem 24rem;
  }

  @media screen and (min-width: 2560px) {
    margin-top: 15rem;
    padding: 5rem 30rem 5rem 30rem;
  }

  .sectionHeaderTitle {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media screen and (min-width: 375px) {
      font-size: 14px;
      letter-spacing: 4px;
    }

    @media screen and (min-width: 768px) {
      font-size: 18px;
      letter-spacing: 4px;
    }
  }

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .sectionTitle {
    font-weight: 600;
    font-size: 20px;

    @media screen and (min-width: 768px) {
      font-size: 26px;
    }
  }

  .exploreAll {
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .scrolling-wrapper-flexbox {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .scrolling-wrapper-flexbox::-webkit-scrollbar {
    height: 8px;
  }

  .scrolling-wrapper-flexbox {
    white-space: nowrap;
    display: flex;
    overflow-x: scroll;
    position: relative;
    z-index: 2;
    scroll-behavior: smooth;
  }

  .scrolling-wrapper-flexbox > div {
    margin-right: 2.5rem;
  }
`;

const ButtonMobileContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  .hero-button-mobile {
    font-family: "Montserrat", sans-serif;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
