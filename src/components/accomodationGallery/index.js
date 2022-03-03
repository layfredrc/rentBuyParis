import styled from "styled-components";
import Image from "next/image";

import image1 from "../../../public/assets/images/image 2.png";
import image2 from "../../../public/assets/images/image 4.png";
import image3 from "../../../public/assets/images/image 3.png";

export default function AccomodationGallery({}) {
	return (
		<AccomodationGalleryContainer>
			<h1 className='accomodation-title'>
				Joséphine<span>, 15ème arrondissement</span>
			</h1>

			<GalleryContainer>
				<BigPicture>
					<Image src={image1} className='big-picture' layout='fill' />
				</BigPicture>
				<SmallPicturesContainer>
					<Image src={image2} objectFit='cover' className='small-picture' />
					<Image src={image3} objectFit='cover' className='small-picture' />
					<Image src={image1} objectFit='cover' className='small-picture' />
					<ShowMore>
						<h2>+15 Photos</h2>
					</ShowMore>
				</SmallPicturesContainer>
			</GalleryContainer>
		</AccomodationGalleryContainer>
	);
}

const AccomodationGalleryContainer = styled.div`
	padding: 2rem;

	.accomodation-title {
		font-size: 24px;
		font-weight: 600;

		span {
			font-family: "Croissant One", cursive;
			font-weight: 400;
		}
	}
`;

const GalleryContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: space-around;

	.big-picture {
		border-radius: 10px;
	}
`;

const BigPicture = styled.div`
	width: 48%;
	position: relative;
	border-radius: 10px;

	@media screen and (min-width: 1024px) {
		width: 80%;
	}
`;

const SmallPicturesContainer = styled.div`
	width: 45%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;

	.small-picture {
		border-radius: 10px;
	}
	@media screen and (min-width: 1024px) {
		width: 60%;
		margin-left: 1.5rem;
		grid-gap: 20px;
	}
`;

const ShowMore = styled.div`
	background: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	font-size: 12px;
	font-weight: 600;
	color: white;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
`;
