import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function AccomodationGallery({ accomodation }) {
	const { attributes } = accomodation || {};
	const { photos, street, name } = attributes || {};
	const { data } = photos || {};
	const galleryImages = [];
	data.map((image) => {
		galleryImages.push(image.attributes.url);
	});
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const [images, setImages] = useState(galleryImages);

	return (
		<AccomodationGalleryContainer>
			<h1 className='accomodation-title'>
				{name},{" "}
				<span>
					{street} <br /> 15ème arrondissement
				</span>
			</h1>

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
						className='small-picture'
						onClick={() => {
							setPhotoIndex(1);
							setIsOpen(true);
						}}
						t='accomodationGallery'
					/>
					<Image
						src={`${images[2]}`}
						objectFit='cover'
						width={200}
						height={200}
						className='small-picture'
						onClick={() => {
							setPhotoIndex(2);
							setIsOpen(true);
						}}
						t='accomodationGallery'
					/>
					<Image
						src={`${images[3]}`}
						objectFit='cover'
						width={200}
						height={200}
						className='small-picture'
						onClick={() => {
							setPhotoIndex(3);
							setIsOpen(true);
						}}
						t='accomodationGallery'
					/>
					<ShowMore
						onClick={() => {
							setPhotoIndex(4);
							setIsOpen(true);
						}}>
						<h2>+15 Photos</h2>
					</ShowMore>
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
	font-weight: 500;
	color: white;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
`;
