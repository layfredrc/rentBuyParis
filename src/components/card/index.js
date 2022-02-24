import Image from "next/image";
import Link from "next/link";
import {
	RiMapPin2Line,
	RiCheckboxCircleLine,
	RiHotelBedFill,
} from "react-icons/ri";
import { GiResize } from "react-icons/gi";
import { Button } from "@mantine/core";

// Style
import styles from "./index.module.scss";
import styled from "styled-components";

export default function Card({ data, key, vertical }) {
	return !vertical ? (
		<Link href={`/accomodation/${key}`}>
			<CardHorizontal>
				<div className='container'>
					<div style={{ flex: 1, position: "relative" }}>
						{data.photos.data.map((photo) => (
							<Image
								src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.url}`}
								layout='fill'
								objectFit='cover'
							/>
						))}
					</div>
					<div style={{ flex: 2 }}>
						<div className='informations'>
							<div>
								<p>
									<span>{data.name}</span>, {data.district}ème arrondissement
								</p>
							</div>
							<div>
								<RiMapPin2Line style={{ marginRight: "5px" }} />
								{data.street}
							</div>
							<div className='details'>
								<div style={{ color: "#15895F" }}>
									<RiCheckboxCircleLine color='#15895F' />
									<span>
										{data.isDisponible ? "Disponible" : "Indisponible"}
									</span>
								</div>
								<div>
									<RiHotelBedFill />
									<span>{data.space}</span>
								</div>
								<div>
									<GiResize />
									<span> {data.size} m²</span>
								</div>
							</div>
						</div>
						<div className='order'>
							<div>
								<span style={{ fontSize: "20px", fontWeight: "600" }}>
									{data.price.value}€
								</span>{" "}
								par mois
							</div>
							<Button
								color="dark"
								radius={0}
								size="md"
								style={{ padding: "10px 30px" }}
							>
								Réserver
							</Button>
						</div>
					</div>
				</div>
			</CardHorizontal>
		</Link>
	) : (
		<Link href={`/accomodation/${key}`}>
			<CardVertical>
				<div className='container'>
					<div style={{ flex: 1, position: "relative" }}>
						{data.photos.data.map((photo) => (
							<Image
								src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${photo.attributes.url}`}
								layout='fill'
								objectFit='cover'
							/>
						))}
					</div>
					<div style={{ flex: 2 }}>
						<div className='informations'>
							<div>
								<p>
									<span>{data.name}</span>, {data.district}ème arrondissement
								</p>
							</div>
							<div>
								<RiMapPin2Line style={{ marginRight: "5px" }} />
								{data.street}
							</div>
							<div className='details'>
								<div style={{ color: "#15895F" }}>
									<RiCheckboxCircleLine color='#15895F' />
									<span>
										{data.isDisponible ? "Disponible" : "Indisponible"}
									</span>
								</div>
								<div>
									<RiHotelBedFill />
									<span>{data.space}</span>
								</div>
								<div>
									<GiResize />
									<span> {data.size} m²</span>
								</div>
							</div>
						</div>
						<div className='order'>
							<div>
								<span style={{ fontSize: "20px", fontWeight: "600" }}>
									{data.price.value}€
								</span>{" "}
								par mois
							</div>
							<Button
								color="dark"
								radius={0}
								size="md"
								style={{ padding: "10px 30px" }}
							>
								Réserver
							</Button>
						</div>

					</div>
				</div>
			</CardVertical>
		</Link>
	);
}

const CardHorizontal = styled.div`
	img {
		border-radius: 5px 0px 0px 5px;
	}

	.container {
		display: flex;
		border-radius: 5px;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25);
		margin: 10px 0;
		background-color: #fff;
	}
	.container > div {
		justify-content: space-between;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.container > div > div > div > p > span {
		font-family: "Croissant One", cursive;
	}
	.order {
		margin-bottom: 10px;
	}
	.container > div > div > div:last-child {
		margin-bottom: 0;
	}
	.container > div {
		padding: 20px 30px;
	}
	.container > div:first-child {
		padding: 0;
	}
	.informations > div {
		margin-bottom: 15px;
	}
	.container > div > div:last-child {
		display: flex;
		justify-content: space-between;
	}
	.order {
		display: flex;
		justify-content: space-between;
	}
	.details {
		display: flex;
	}
	.details > div {
		margin-right: 15px;
		display: flex;
		align-items: center;
	}
	.details > div > span {
		margin-left: 5px;
	}

	@media (max-width: 600px) {
		img {
			border-radius: 5px 5px 0px 0px;
		}

		.container {
			display: block;
		}
		.container > div {
			padding: 20px 20px 5px 20px;
		}
		.container > div:first-child {
			height: 16em;
		}
		.container > div {
			width: auto;
		}
		.details {
			justify-content: space-between;
		}
		.details > div {
			margin-right: 0;
		}
		.container > div > div:last-child {
			justify-content: space-around !important;
			align-items: center;
			margin-top: 20px;
		}
	}
`;

const CardVertical = styled.div`
	img {
		border-radius: 5px 5px 0px 0px;
	}

	.container {
		display: block;
		border-radius: 5px;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 4px 4px rgba(0, 0, 0, 0.25);
		margin: 10px 0;
		background-color: #fff;
		width: 100%;
	}
	.container > div {
		padding: 20px 20px 5px 20px;
		width: 100%;
		justify-content: space-between;
		display: flex;
		flex-direction: column;
	}
	.container > div > div > div > p > span {
		font-family: "Croissant One", cursive;
	}

	.order {
		margin-bottom: 10px;
	}
	.container > div:first-child {
		height: 16em;
	}
	.container > div {
		width: auto;
	}
	.details {
		display: flex;
		justify-content: space-between;
	}
	.details > div {
		margin-right: 0;
		display: flex;
		align-items: center;
	}
	.container > div > div:last-child {
		display: flex;
		justify-content: space-around !important;
		align-items: center;
		margin-top: 20px;
	}
`;
