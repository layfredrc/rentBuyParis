import Card from "../card";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

import Link from "next/link";
export default function SectionAvailableNow({}) {
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
				<div className='card'>
					<h2>Card</h2>
				</div>
				<div className='card'>
					<h2>Card</h2>
				</div>
				<div className='card'>
					<h2>Card</h2>
				</div>
				<div className='card'>
					<h2>Card</h2>
				</div>
				<div className='card'>
					<h2>Card</h2>
				</div>
				<div className='card'>
					<h2>Card</h2>
				</div>
				<div className='card'>
					<h2>Card</h2>
				</div>
				<div className='card'>
					<h2>Card</h2>
				</div>
				<div className='card'>
					<h2>Card</h2>
				</div>
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
	}

	.sectionHeader {
		display: flex;
		justify-content: space-between;
	}

	.sectionTitle {
		margin-top: 1rem;
		font-weight: 600;
		font-size: 20px;
	}

	.exploreAll {
		font-weight: 600;
		font-size: 16px;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}

	.scrolling-wrapper-flexbox {
		display: flex;
		flex-wrap: nowrap;
		overflow-x: auto;

		.card {
			flex: 0 0 auto;
			margin-right: 3px;
		}

		.card {
			border: 2px solid $red;
			width: 150px;
			height: 75px;
			background: black;
		}
	}

	.scrolling-wrapper-flexbox {
		height: 80px;
		margin-bottom: 20px;
		width: 100%;
		-webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar {
			display: none;
		}
	}
`;
