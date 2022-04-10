import { useState } from "react";
import Image from "next/image";
import Lightbox from "react-image-lightbox";

// Style
import styled from "styled-components";
import "react-image-lightbox/style.css";

// Components
import {
	SectionTitle,
	CircleBackground,
	SectionTitleContainer,
} from "../accomodationServices";

export default function AccomodationGallery({ accomodation }) {
	const galleryImages = [];
	accomodation?.attributes?.photos.data.map((image) => {
		galleryImages.push(image.attributes.url);
	});
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [images, setImages] = useState(galleryImages);

	return (
		<AccomodationGalleryContainer>
			<h1 className='accomodation-title'>
				{accomodation?.attributes?.name},{" "}
				<span>
					{accomodation?.attributes?.street} <br />
					{accomodation?.attributes?.district}
					{accomodation?.attributes?.district > 20
						? "th department"
						: accomodation?.attributes?.district === 1
							? "er arrondissement"
							: "ème arrondissement"}
				</span>
			</h1>

			<SectionTitleContainer>
				<CircleBackground />
				<SectionTitle>Gallery</SectionTitle>
			</SectionTitleContainer>

			<GalleryContainer>
				<BigPicture>
					<Image
						src={`${images[0]}`}
						className='big-picture'
						layout='fill'
						onClick={() => {
							setPhotoIndex(0);
							setIsOpen(true);
						}}
						alt='accomodationGallery'
					/>
				</BigPicture>
				<SmallPicturesContainer>
					<Image
						src={`${images[1]}`}
						objectFit='cover'
						width={200}
						height={200}
						className='small-picture-1'
						onClick={() => {
							setPhotoIndex(1);
							setIsOpen(true);
						}}
						alt='accomodationGallery'
					/>
					<Image
						src={`${images[2]}`}
						objectFit='cover'
						width={200}
						height={200}
						className='small-picture-2'
						onClick={() => {
							setPhotoIndex(2);
							setIsOpen(true);
						}}
						alt='accomodationGallery'
					/>
					<Image
						src={`${images[3]}`}
						objectFit='cover'
						width={200}
						height={200}
						className='small-picture-3'
						onClick={() => {
							setPhotoIndex(3);
							setIsOpen(true);
						}}
						alt='accomodationGallery'
					/>
					{images.length > 5 ? (
						<ShowMore
							onClick={() => {
								setPhotoIndex(4);
								setIsOpen(true);
							}}>
							<h2>+{images.length - 5} Photos</h2>
						</ShowMore>
					) : (
						<Image
							src={`${images[4]}`}
							objectFit='cover'
							width={200}
							height={200}
							className='small-picture-4'
							onClick={() => {
								setPhotoIndex(4);
								setIsOpen(true);
							}}
							alt='accomodationGallery'
						/>
					)}
				</SmallPicturesContainer>
			</GalleryContainer>

			{isOpen && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() =>
						setPhotoIndex((photoIndex + images.length - 1) % images.length)
					}
					onMoveNextRequest={() =>
						setPhotoIndex((photoIndex + 1) % images.length)
					}
				/>
			)}
		</AccomodationGalleryContainer>
	);
}

const AccomodationGalleryContainer = styled.div`
	padding: 2rem;

	.accomodation-title {
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 3rem;
		span {
			font-family: "Croissant One", cursive;
			font-weight: 400;
		}
	}
`;

const GalleryContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	cursor: pointer;
	.big-picture {
		border-radius: 10px 0px 0px 10px;
	}

	.big-picture:hover {
		transform: scale(0.98);
		transition: transform 0.8s ease-out;
	}
`;

const BigPicture = styled.div`
	width: 48%;
	position: relative;
	border-radius: 10px;
	margin-right: 10px;
	@media screen and (min-width: 1024px) {
		width: 80%;
	}
`;

const SmallPicturesContainer = styled.div`
	width: 50%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;

	.small-picture-1 :hover {
		transform: scale(0.98);
		transition: transform 0.5s ease;
	}

	.small-picture-2 {
		border-radius: 0px 10px 0px 0px;
	}

	.small-picture-2:hover {
		transform: scale(0.98);
		transition: transform 0.5s ease;
	}

	.small-picture-3 :hover {
		transform: scale(0.98);
		transition: transform 0.5s ease;
	}
	.small-picture-4 {
		border-radius: 0px 0px 10px 0px;
	}

	.small-picture-4:hover {
		transform: scale(0.98);
		transition: transform 0.5s ease;
	}

	@media screen and (min-width: 1024px) {
		width: 80%;
		grid-gap: 10px;
	}
`;

const ShowMore = styled.div`
	background: rgba(0, 0, 0, 0.5);
	border-radius: 0px 0px 10px 0px;
	font-size: 12px;
	font-weight: 500;
	color: white;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
`;
