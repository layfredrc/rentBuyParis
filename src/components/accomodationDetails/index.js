import styled from "styled-components";
import {
	SectionTitle,
	CircleBackground,
	SectionTitleContainer,
} from "../accomodationServices";

import { RiUserAddLine, RiHotelBedLine } from "react-icons/ri";
import { GiResize } from "react-icons/gi";
import { MdOutlineShower } from "react-icons/md";

export default function AccomodationDetails({ accomodation }) {
	const { attributes } = accomodation;
	const { bedroom, guests, bathroom, space, description } = attributes;
	return (
		<AccomodationDetailsContainer>
			<SectionTitleContainer>
				<CircleBackground />
				<SectionTitle>Details</SectionTitle>
			</SectionTitleContainer>
			<DetailsCardContainer>
				<DetailsCard>
					<RiUserAddLine size={30} style={{ color: "#2385be" }} />
					<h3>{`${guests}`} Guests</h3>
				</DetailsCard>
				<DetailsCard>
					<GiResize size={30} style={{ color: "#2385be" }} />
					<h3>{`${space}`} m²</h3>
				</DetailsCard>
				<DetailsCard>
					<RiHotelBedLine size={30} style={{ color: "#2385be" }} />
					<h3>{`${bedroom}`} Bedrooms</h3>
				</DetailsCard>
				<DetailsCard>
					<MdOutlineShower size={30} style={{ color: "#2385be" }} />
					<h3>{`${bathroom}`} Bathrooms</h3>
				</DetailsCard>
			</DetailsCardContainer>

			<TextContent>
				<p>
					{`${description}`}
				</p>
			</TextContent>
		</AccomodationDetailsContainer>
	);
}

const AccomodationDetailsContainer = styled.div`
	padding: 2rem;
`;

const DetailsCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	grid-column-gap: 5px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (min-width: 1024px) {
		grid-template-columns: repeat(4, 0fr);
		grid-column-gap: 15px;
	}
	@media screen and (min-width: 1440px) {
	}
`;
const DetailsCard = styled.div`
	width: 80px;
	height: 60px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	border: 1px solid #d5d5d5;
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	h3 {
		margin-top: 1rem;
		font-size: 11px;
		font-weight: 600;
	}

	@media screen and (min-width: 375px) {
		width: 100px;
	}
	@media screen and (min-width: 425px) {
		width: 120px;
	}
	@media screen and (min-width: 1024px) {
		width: 100px;
	}
`;

const TextContent = styled.div`
	margin-top: 2rem;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.2;

	@media screen and (min-width: 1024px) {
		width: 90%;
	}
`;
