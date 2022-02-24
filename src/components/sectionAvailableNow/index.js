import Card from "../card";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
export default function SectionAvailableNow({ rents }) {
	return (
		<SectionAvailableNowContainer>
			<h3 className='sectionHeaderTitle'>
				<span>🔑</span> Disponible maintenant
			</h3>

			<div className='sectionHeader'>
				<h1 className='sectionTitle'>Les appartements disponibles</h1>

				<Link href={"/accomodations"}>
					<div className='exploreAll'>
						Tout explorer{" "}
						<BsArrowRight size={20} style={{ transform: "translateY(5px)" }} />
					</div>
				</Link>
			</div>

			<div className='scrolling-wrapper-flexbox'>
				{rents.data.map((d) => (
					<Card data={d.attributes} key={d.id} vertical />
				))}
			</div>
		</SectionAvailableNowContainer>
	);
}

const SectionAvailableNowContainer = styled.div`
	background-color: white;
	margin-top: 4rem;
	padding: 2rem 2rem 3rem 2rem;

	@media screen and (min-width: 320px) {
		margin-top: 15rem;
	}
	@media screen and (min-width: 425px) {
	}

	@media screen and (min-width: 768px) {
		margin-top: 3rem;
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

	.sectionHeaderTitle {
		font-size: 13px;
		font-weight: 500;
		letter-spacing: 2px;
		text-transform: uppercase;

		@media screen and (min-width: 768px){
			font-size: 18px;
			
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

		@media screen and (max-width: 768px) {
			display: none;
		}

	}

	.scrolling-wrapper-flexbox {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.scrolling-wrapper-flexbox::-webkit-scrollbar {
		display: none;
	}

	
		.scrolling-wrapper-flexbox {
			white-space: nowrap;
			display: flex;
			overflow-x: scroll;
		}

		.scrolling-wrapper-flexbox > div {
			margin-right: 2.5rem;
		}
	
`;
