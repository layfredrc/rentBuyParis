import Card from "../card";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { GiHouseKeys } from "react-icons/gi";
import { MdMapsHomeWork } from "react-icons/md";
import Button from "../button";
import Link from "next/link";
export default function SectionAvailableNow({}) {
	return (
		<SectionAvailableNowContainer>
			<h3>
				<span>--</span> Disponible maintenant
			</h3>

			<h1>Les appartements disponibles</h1>

			<Link href={"/accomodations"}>
				<div>
					Tout explorer <BsArrowRight />
				</div>
			</Link>
		</SectionAvailableNowContainer>
	);
}

const SectionAvailableNowContainer = styled.div`
	background-color: white;
	margin-top: 4rem;
	padding: 2rem 2rem 3rem 2rem;

	.buttons {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		margin-top: 2rem;

		@media screen and (max-width: 1440px) {
			font-size: 12px;
		}
	}

	@media screen and (min-width: 1024px) {
		padding: 5rem;
	}
	@media screen and (min-width: 1440px) {
		padding: 5rem 15rem 5rem 15rem;
	}

	@media screen and (min-width: 2550px) {
		padding: 0rem 28rem 0rem 28rem;
	}

	h3 {
		font-size: 20px;
		font-weight: 500;
		letter-spacing: 20%;
		text-transform: uppercase;

		span {
			letter-spacing: 1%;
		}
	}
`;
