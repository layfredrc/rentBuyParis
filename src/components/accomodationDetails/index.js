import {
	RiUserAddLine,
	RiHotelBedLine,
	RiDoorOpenLine,
	RiHomeWifiLine,
} from "react-icons/ri";
import { GiResize } from "react-icons/gi";
import { MdOutlineShower, MdOutlineStairs } from "react-icons/md";
import { FiAirplay } from "react-icons/fi";
// Components
import {
	SectionTitle,
	CircleBackground,
	SectionTitleContainer,
} from "../accomodationServices";

// Style
import styled from "styled-components";

export default function AccomodationDetails({ accomodation }) {
	const numberBed =
		accomodation?.attributes?.lit_simple +
		accomodation?.attributes?.lit_double +
		accomodation?.attributes?.canape_lit;
	return (
		<AccomodationDetailsContainer>
			<SectionTitleContainer>
				<CircleBackground />
				<SectionTitle>Details</SectionTitle>
			</SectionTitleContainer>
			<DetailsCardContainer>
				<DetailsCard>
					<RiUserAddLine size={30} style={{ color: "#2385be" }} />
					<h3>
						{`${accomodation?.attributes?.guests}`}{" "}
						{accomodation?.attributes?.guests === 1 ? "Guest" : "Guests"}
					</h3>
				</DetailsCard>
				<DetailsCard>
					<RiDoorOpenLine size={30} style={{ color: "#2385be" }} />
					<h3>
						{`${accomodation?.attributes?.rooms}`}{" "}
						{accomodation?.attributes?.rooms === 1 ? "Room" : "Rooms"}{" "}
					</h3>
				</DetailsCard>
				<DetailsCard>
					<MdOutlineStairs size={30} style={{ color: "#2385be" }} />
					<h3>
						{`${accomodation?.attributes?.floor}`}
						{accomodation?.attributes?.floor === 1
							? "rst"
							: accomodation?.attributes?.floor === 2
							? "nd"
							: accomodation?.attributes?.floor === 3
							? "rd"
							: "th"}{" "}
						Floor
					</h3>
				</DetailsCard>
				<DetailsCard>
					<GiResize size={30} style={{ color: "#2385be" }} />
					<h3>{`${accomodation?.attributes?.space}`} m²</h3>
				</DetailsCard>
				<DetailsCard>
					<RiHotelBedLine size={30} style={{ color: "#2385be" }} />
					<p className='beds'>
						{`${numberBed}`} {numberBed === 1 ? "Bed" : "Beds"} <br />(
						{accomodation?.attributes?.lit_simple
							? `${accomodation?.attributes?.lit_simple} single bed / `
							: ""}
						{accomodation?.attributes?.lit_double
							? `${accomodation?.attributes?.lit_double} double bed `
							: ""}
						{accomodation?.attributes?.canape_lit
							? `${accomodation?.attributes?.canape_lit} sofa bed`
							: ""}
						)
					</p>
				</DetailsCard>
				<DetailsCard>
					<MdOutlineShower size={30} style={{ color: "#2385be" }} />
					<h3>{`${accomodation?.attributes?.bathroom}`} Bathrooms</h3>
				</DetailsCard>
				<DetailsCard>
					<RiHomeWifiLine size={30} style={{ color: "#2385be" }} />
					<h3>WiFi</h3>
				</DetailsCard>
				<DetailsCard>
					<FiAirplay size={30} style={{ color: "#2385be" }} />
					<h3>TV Set</h3>
				</DetailsCard>
			</DetailsCardContainer>

			<TextContent>
				<p>{`${accomodation?.attributes?.description}`}</p>
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

	@media screen and (min-width: 375px) {
		grid-column-gap: 0px;
	}

	@media screen and (min-width: 400px) {
		grid-template-columns: repeat(2, 50%);
		grid-gap: 0px;
		grid-row-gap: 30px;
	}

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
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
		rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

	h3 {
		margin-top: 1rem;
		font-size: 11px;
		font-weight: 600;
	}
	.beds {
		margin-top: 1rem;
		font-size: 8px;
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
