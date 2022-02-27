import styled from "styled-components";
import {
	SectionTitle,
	CircleBackground,
	SectionTitleContainer,
} from "../accomodationServices";

import { FiCheck } from "react-icons/fi";
import { MdOutlineClose, MdDoNotDisturbAlt } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function RoomAmenities({}) {
	return (
		<Wrapper>
			<SectionTitleContainer>
				<CircleBackground />
				<SectionTitle>Room Amenities</SectionTitle>
			</SectionTitleContainer>
			<RoomAmenitiesContainer>
				<div className='general'>
					<h3>General</h3>
					<ul>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} />
							Air conditionning
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Smoke-free
							property
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Heating
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Soundproof
							rooms
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Elevator
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Toilets
						</li>
					</ul>
				</div>
				<div className='outdoors'>
					<h3>Outdoors</h3>
					<ul>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Terrace /
							Balcony
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Garden
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Parking
						</li>
					</ul>
				</div>
				<div className='devices'>
					<h3>Devices & Equipment</h3>
					<ul>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> TV set
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Refrigerator
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Toaster
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Oven
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Kettle
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Microwave
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Coffee maker
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Dish washer
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Washing
							machine
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Iron /
							Ironing board
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Vacuum
							cleaner
						</li>
						<li>
							<FiCheck size={15} style={{ marginRight: "5px" }} /> Hair dryer
						</li>
					</ul>
				</div>
				<div className='rules'>
					<h3>House rules</h3>
					<ul>
						<li>
							<MdDoNotDisturbAlt size={15} style={{ marginRight: "5px" }} /> No
							parties
						</li>
						<li>
							<MdDoNotDisturbAlt size={15} style={{ marginRight: "5px" }} />
							Pets not allowed
						</li>
						<li>
							<MdDoNotDisturbAlt size={15} style={{ marginRight: "5px" }} />
							Guests not allowed
						</li>
					</ul>
				</div>
				<div className='front-desk'>
					<h3>Front Desk Services</h3>
					<ul>
						<li>
							<AiOutlineExclamationCircle
								size={15}
								style={{ marginRight: "5px" }}
							/>
							Check in
						</li>
						<li>
							<AiOutlineExclamationCircle
								size={15}
								style={{ marginRight: "5px" }}
							/>
							Check out
						</li>
						<li>
							<AiOutlineExclamationCircle
								size={15}
								style={{ marginRight: "5px" }}
							/>
							Cleaning
						</li>
					</ul>
				</div>
			</RoomAmenitiesContainer>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	padding: 2rem;
`;

const RoomAmenitiesContainer = styled.div`
	padding: 2rem;
	border: 1px solid #d4d4d4;
	border-radius: 10px;

	div {
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 20px;
		font-weight: 600;
		line-height: 2;
	}

	li {
		line-height: 1.8;
	}
`;
