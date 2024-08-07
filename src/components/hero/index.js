import { Button } from "@mantine/core";
import { GiHouseKeys } from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import Link from "next/link";


// Style
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { titleAnim, fade } from "../../lib/animation";

export default function Hero ({ nbRents, nbGoods }) {

  return (
    <>
      <HeroContainer>
        <Slogan>
          <motion.h1
            variants={ titleAnim }
            initial="hidden"
            animate="show"
            className="slogan-title"
          >
            <span className="title">
              Rentals and sales of apartments in Paris
            </span>
          </motion.h1>
        </Slogan>

        <HeroContentWrapper>
          <div className="text-content">
            <motion.h2 variants={ fade }>
              Apartments for rent and for sale in the very center of Paris, in
              ideal conditions and at reasonable prices.
            </motion.h2>

            <ButtonContainerDesktop variants={ fade }>
              <Link href={ "/accomodations/rents" }>
                <Button
                  size="sm"
                  color="dark"
                  radius={ 13 }
                  className="hero-button-desktop"
                  leftIcon={ <MdMapsHomeWork size={ 18 } /> }
                >
                  Apartment <br /> rental
                </Button>
              </Link>
              <Link href={ "/accomodations/properties" }>
                <Button
                  size="sm"
                  color="dark"
                  radius={ 13 }
                  className="hero-button-desktop"
                  leftIcon={ <GiHouseKeys size={ 18 } /> }
                >
                  Properties for sale
                </Button>
              </Link>
            </ButtonContainerDesktop>

            <motion.div variants={ titleAnim } className="digits">
              <h3>
                { nbRents }
                <span>+</span>
                <br />
                <p>
                  Apartments for rent<span>.</span> <br />
                  (One month minimum rentals)
                </p>
              </h3>
              <h3>
                { nbGoods }
                <span>+</span>
                <br />
                <p>
                  Properties for sale ? <br />
                  <Link href="/accomodations/properties">
                    <a style={ { textDecoration: "underline" } }>
                      We take care of yours !
                    </a>
                  </Link>
                </p>
              </h3>
            </motion.div>
          </div>
          {/* <ImageWrapper variants={fade}>
						<Image
							src={heroConciergerie}
							alt='RentBuyParis'
							layout='fill'
							className='hero-image'
							priority
						/>
					</ImageWrapper> */}
          <ButtonContainerMobile>
            <Link href={ "/accomodations/rents" }>
              <Button
                size="xs"
                color="dark"
                radius={ 7 }
                leftIcon={ <MdMapsHomeWork size={ 15 } /> }
                className="hero-button-mobile"
              >
                Apartment <br /> rental
              </Button>
            </Link>
            <Link href={ "/accomodations/properties" }>
              <Button
                size="xs"
                color="dark"
                radius={ 7 }
                leftIcon={ <GiHouseKeys size={ 15 } /> }
                className="hero-button-mobile"
              >
                Properties <br /> for sale
              </Button>
            </Link>
          </ButtonContainerMobile>
        </HeroContentWrapper>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled.div`
  max-width: 100vw;
  color: white;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem 0rem 2rem;
  }

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
  @media screen and (min-width: 1024px) {
    padding: 3rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 3rem 3rem -0rem 3rem;
    margin-bottom: -4rem;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: -9rem;
  }
`;

const Slogan = styled.div`
  .slogan-title {
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-weight: 600;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    line-height: 1.2;
    overflow: hidden;
    text-align: center;

    @media screen and (max-width: 465px) {
      font-size: 25px;
    }

    @media screen and (min-width: 768px) {
      font-size: 48px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 54px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 64px;
    }
  }
`;

const HeroContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-25px);
  position: relative;
  @media screen and (min-width: 1024px) {
    transform: translateY(-2rem);
    height: 350px;
  }
  @media screen and (min-width: 1440px) {
    height: 400px;
    transform: translateY(-5rem);
  }

  .text-content {
    height: min-content;
    text-align: center;
    h2 {
      margin-top: 3rem;
      font-weight: 500;
      font-size: 16px;
      width: 100%;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 425px) {
        font-size: 18px;
      }

      @media screen and (min-width: 768px) {
        width: 420px;
        font-size: 22px;
      }
      @media screen and (min-width: 1024px) {
        width: 600px;
        font-size: 32px;
        margin-top: 4rem;
      }
      @media screen and (min-width: 1440px) {
        margin-top: 6rem;
      }
    }

    .digits span {
      color: #3ea6c7;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .digits {
      display: flex;
      flex-flow: row;
      justify-content: space-evenly;
      margin-top: 2rem;
      font-size: 32px;
      gap: 20px;
      font-weight: 600;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      p {
        margin-top: 0.25rem;
        font-size: 12px;
        font-weight: 500;
        text-align: center;

        @media screen and (max-width: 425px) {
          font-size: 8px;
        }
        @media screen and (max-width: 768px) {
          font-size: 10px;
        }
        @media screen and (min-width: 768px) {
          font-size: 12px;
        }
        @media screen and (min-width: 1024px) {
          font-size: 14px;
        }
        @media screen and (min-width: 1440px) {
        }

        @media screen and (min-width: 2550px) {
        }
      }

      @media screen and (max-width: 425px) {
        margin-top: -1rem;
        font-size: 22px;
      }

      @media screen and (max-width: 768px) {
        margin-top: 3rem;
        font-size: 28px;
      }

      @media screen and (min-width: 768px) {
        font-size: 32px;
      }
      @media screen and (min-width: 1024px) {
      }
      @media screen and (min-width: 1440px) {
        width: 500px;
      }
    }
  }
`;
const ImageWrapper = styled(motion.div)`
  width: 2000px;
  height: auto;
  transform: translateX(20px);
  > div {
    position: relative;
  }

  .hero-image {
    object-fit: contain;
  }

  @media screen and (min-width: 1024px) {
    transform: translate(2rem, -11rem);
    height: 500px;
  }
  @media screen and (min-width: 1440px) {
    transform: translate(2rem, -9rem);
  }
  @media screen and (min-width: 2560px) {
    transform: translate(4rem, -10rem);
    height: 600px;
  }
`;

const ButtonContainerDesktop = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  font-size: 12px;
  margin-top: 2rem;

  @media screen and (max-width: 599px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .hero-button-desktop {
      width: 150px;
      font-size: 9px;
      font-family: "Montserrat", sans-serif;
    }
  }

  @media screen and (min-width: 1024px) {
    .hero-button-desktop {
      width: 240px;
      font-size: 16px;
      font-family: "Montserrat", sans-serif;
      br {
        display: none;
      }
    }
  }
`;

const ButtonContainerMobile = styled.div`
  position: absolute;
  bottom: -5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .hero-button-mobile {
    width: 120px;
    height: 40px;
    font-size: 8px;

    font-family: "Montserrat", sans-serif;
  }

  @media screen and (min-width: 320px) {
    font-size: 8px;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
    font-size: 8px;
    gap: 14px;
    .hero-button-mobile {
      width: 140px;
      font-size: 10px;
    }
  }
  @media screen and (min-width: 425px) {
    bottom: -6rem;

    font-size: 9px;
    justify-content: space-around;
    gap: 20px;
    .hero-button-mobile {
      width: 150px;
      height: 50px;
      font-size: 10px;
    }
  }

  @media screen and (min-width: 600px) {
    display: none;
  }

  @media screen and (max-width: 1440px) {
  }
`;
