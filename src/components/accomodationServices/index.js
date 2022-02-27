import styled from "styled-components";
import Image from "next/image";
import internet from "../../../public/assets/images/internet.svg";
import cuisine from "../../../public/assets/images/cuisine.svg";
import support from "../../../public/assets/images/support.svg";
import bathroom from "../../../public/assets/images/bathroom.svg";

export default function AccomodationServices({}) {
	return (
		<AccomodationServicesContainer>
			<SectionTitleContainer>
				<CircleBackground />
				<SectionTitle>Services</SectionTitle>
			</SectionTitleContainer>
			<ServicesCardContainer>
				<ServicesCard>
					<Image src={internet} />
					<div className='text-content'>
						<h4>Feature #1</h4>
						<h5>Internet / Wi-Fi Connection</h5>
					</div>
				</ServicesCard>
				<ServicesCard>
					<Image src={cuisine} />
					<div className='text-content'>
						<h4>Feature #2</h4>
						<h5>Cuisine fully equipped</h5>
					</div>
				</ServicesCard>
				<ServicesCard>
					<Image src={bathroom} />
					<div className='text-content'>
						<h4>Feature #3</h4>
						<h5>Bathroom fully equipped</h5>
					</div>
				</ServicesCard>
				<ServicesCard>
					<Image src={support} />
					<div className='text-content'>
						<h4>Feature #4</h4>
						<h5>24/7 Contact Support</h5>
					</div>
				</ServicesCard>
			</ServicesCardContainer>
		</AccomodationServicesContainer>
	);
}

const AccomodationServicesContainer = styled.div`
	padding: 2rem;

	@media screen and (min-width: 1024px) {
	}
`;

const ServicesCardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 20px;

	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(2, 340px);
		height: auto;
		width: 75%;
	}
`;

const ServicesCard = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid #d4d4d4;
	border-radius: 10px;
	padding: 1rem;

	:hover {
		background: #e5f9ff;

		h5 {
			color: #3ea6c7;
		}
	}

	@media screen and (min-width: 1024px) {
		width: 300px;
	}

	.text-content {
		width: 65%;

		h4 {
			font-size: 11px;
			font-weight: 600;
			line-height: 2;
			color: rgba(0, 0, 0, 0.3);
		}

		h5 {
			font-size: 13px;
			font-weight: 600;
		}

		@media screen and (max-width: 320px) {
			width: 50%;
		}
	}
`;
export const SectionTitle = styled.h3`
	font-size: 20px;
	font-weight: bold;
	letter-spacing: 2.5px;
	text-transform: uppercase;
	color: #2385be;
`;
export const SectionTitleContainer = styled.div`
	position: relative;
	margin-bottom: 2rem;
`;

export const CircleBackground = styled.div`
	position: absolute;
	top: -25px;
	left: -20px;
	width: 50px;
	height: 50px;
	background-color: #a2d9e0;
	opacity: 60%;
	border-radius: 50%;
`;
