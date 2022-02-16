import styled from "styled-components";
import useSizeScreen from "../../lib/use/useSizeScreen";
import { bgColorPrimary } from "../../styles/colors.module.scss";
import heroImg from "../../../public/assets/images/hero.jpg";
import Image from "next/image";

export default function Hero({}) {
	return (
		<HeroContainer className=''>
			<Slogan>
				<h1 className='slogan-title'>
					Locations et ventes d'appartements à <span>Paris</span>
				</h1>
			</Slogan>

			<HeroContentWrapper>
				<div className='text-content'>
					<h4>
						Appartements à louer et à vendre en plein centre de Paris, dans des
						conditions idéales et des prix convenables<span>.</span>
					</h4>
					<div className='digits'>
						<h3>
							15<span>+</span>
							<br />
							<p>
								Appartements en location<span>.</span>
							</p>
						</h3>
						<h3>
							0<span>+</span>
							<br />
							<p>
								Appartements à vendre, voulez vous qu'on s'occupe du vôtre?
								<span>.</span>
							</p>
						</h3>
					</div>
				</div>

				<Image
					src={heroImg}
					alt='RentBuyParis'
					width={225}
					height={400}
					className='hero-image'
				/>
			</HeroContentWrapper>
		</HeroContainer>
	);
}

const HeroContainer = styled.div`
	background-color: ${bgColorPrimary};
	max-width: 100vw;
	height: 500px;
	padding: 3rem 10rem 3rem 2rem;
`;

const Slogan = styled.div`
	.slogan-title {
		font-size: 36px;
		font-weight: 600;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		line-height: 1.2;
		width: 420px;

		span {
			font-family: "Croissant One", cursive;
			font-weight: 400;
			line-height: 1.5;
		}
	}
`;

const HeroContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 400px;
	transform: translate(0px, -25px);

	.text-content {
		h4 {
			margin-top: 3rem;
			font-weight: 500;
			font-size: 16px;
			width: 150px;
		}

		span {
			color: #3ea6c7;
		}

		.digits {
			height: 150px;
			width: 120px;
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			margin-top: 2rem;
			font-size: 24px;
			font-weight: 600;

			p {
				margin-top: 0.25rem;
				font-size: 12px;
				font-weight: 500;
			}
		}
	}

	.hero-image {
	}
`;
