import styled from "styled-components";
import useSizeScreen from "../../lib/use/useSizeScreen";
import { bgColorPrimary, bgCircle } from "../../styles/colors.module.scss";
import paris1 from "../../../public/assets/images/paris-1.jpg";
import paris2 from "../../../public/assets/images/popup-image.jpg";
import paris3 from "../../../public/assets/images/paris-3.jpg";
import paris4 from "../../../public/assets/images/paris-4.png";
import paris5 from "../../../public/assets/images/paris-5.png";
import paris6 from "../../../public/assets/images/paris-6.png";
import Image from "next/image";
export default function SectionText({ }) {
	const isMobile = useSizeScreen();

	return (
		<>
			<SectionTextContainer>
				<StayInParis>
					<div className='left'>
						<h1>
							Stay in Paris with <br />
							<span>RentBuyParis</span>
						</h1>
						<p>
							Hi, I’m Stephan Jaquet, offering rentals starting from one month and
							sometimes property for sale in Paris and in France. If you want to
							invest, I can also hunt the flat or house you wish to buy. I’m
							parisian and I personally know all the apartments published on my
							site since I take most of the pictures myself.
						</p>
						<p>
							I’m in the parisian real estate business since 2012 and I know local
							prices, I don’t list anything overpriced on my site, except for
							sales sometimes, but they are more negociable.
						</p>
						<p>
							My reasonable fee is always paid by the tenant, it’s easier that way
							for me to negociate the best price from the owner.
						</p>
						<p>Check my commission section.</p>
						<p>
							Here, your problems are my problems, I can fix most of them, and
							find someone who can in any case.
						</p>
						<p>Looking forward to meeting you</p>
					</div>

					<div className='right'>
						<Paris1>
							<Image src={paris1} width={250} height={150} />
						</Paris1>
						<Paris2>
							<Image src={paris2} width={300} height={150} />
						</Paris2>
						<Paris3>
							<Image src={paris3} width={250} height={150} />
						</Paris3>
					</div>
				</StayInParis>
				<ListYourProperty>
					<div className='left'>
						<Image src={paris4} height={400} width={300} className='paris4' />
					</div>
					<div className='right'>
						<h1>List your property</h1>
						<p>
							Contact me if you wish to list your property on my site. I can take
							pictures, estimate it, and advise you free of charge.
						</p>
						<p>
							For rentals, I publish only furnished flats since I usually don’t
							work with empty apartments.
						</p>
						<p>
							I prefer quality to quantity, to respect the time of my clients, I
							will insist on the updated availabilities of my calendars.
						</p>
					</div>
				</ListYourProperty>
				<RealEstatePriceInParis>
					<div className='left'>
						<h1>Real estate price in Paris</h1>
						<p>
							Average price of a square meter is around 10 000€ a m². In the nice
							neighborhoods it rises around 15 000€ and for the most exceptionnal
							properties, to buy a square meter can go up to 20 000 or 25 000€.
						</p>
						<p>
							Everything depends of the shape of the place and building, the
							district, public transportation and schools around. Tell me what you
							want, I’ll find you what you need.{" "}
						</p>
						<p>
							For rent, it’s approximately between 30 and 50€ a square meter, but
							again it really depends of many features such as quality of the
							building and furniture, area, rental period, services included...
						</p>
					</div>
					<div className='right'>
						<Image src={paris5} height={400} width={300} />
					</div>
				</RealEstatePriceInParis>
				<ServicesForOwnersAndTenants>
					<div className='left'>
						<Image src={paris6} />
					</div>
					<div className='right'>
						<h1>Services for owners and tenants</h1>
						<p>
							My main mission is to introduce serious tenants to serious owners.
							My fee is paid by the tenant and I therefore ask reasonable amounts
							from the owners.
						</p>
						<p>
							My oral advices on the phone or in person are free to establish a
							relation of trust between both parties.
						</p>
						<p>
							Basically the owner has to deliver a clean and functional apartment
							and the tenant has to pay on time.
						</p>
						<p>
							To save time, little problems can be solved by the owner, but I will
							be glad to help, to translate or to resolve problems myself.
						</p>

						<p>
							My fee to go check out the flat will be of 50€, but it will be
							possible to video call me to show me what’s wrong.
						</p>

						<p>Just contact me, there’s pretty much nothing I cannot do !</p>
					</div>
				</ServicesForOwnersAndTenants>
			</SectionTextContainer>

			<SectionTextContainerMobile>
				<h1>
					Stay in Paris with <span>RentBuyParis</span>
				</h1>
				<RectangleBackgroundContainer>
					<RectangleBackground />
				</RectangleBackgroundContainer>
				<p>
					Hi, I’m Stephan Jaquet, offering rentals starting from one month and
					sometimes property for sale in Paris and in France.
					<br />
					If you want to invest, I can also hunt the flat or house you wish to
					buy. I’m parisian and I personally know all the apartments published on
					my site since I take most of the pictures myself.
				</p>
				<p>
					I’m in the parisian real estate business since 2012 and I know local
					prices, I don’t list anything overpriced on my site, except for sales
					sometimes, but they are more negociable.
				</p>
				<p>
					My reasonable fee is always paid by the tenant, it’s easier that way for
					me to negociate the best price from the owner.
				</p>
				<p>Check my commission section.</p>
				<p>
					Here, your problems are my problems, I can fix most of them, and find
					someone who can in any case.
				</p>
				<p>Looking forward to meeting you</p>

				<h1>List your property</h1>

				<p>
					Contact me if you wish to list your property on my site. I can take
					pictures, estimate it, and advise you free of charge.{" "}
				</p>
				<p>
					For rentals, I publish only furnished flats since I usually don’t work
					with empty apartments.
				</p>
				<p>
					I prefer quality to quantity, to respect the time of my clients, I will
					insist on the updated availabilities of my calendars.
				</p>
				<h1>Real estate price in Paris</h1>

				<p>
					Average price of a square meter is around 10 000€ a m². In the nice
					neighborhoods it rises around 15 000€ and for the most exceptionnal
					properties, to buy a square meter can go up to 20 000 or 25 000€.
				</p>
				<p>
					Everything depends of the shape of the place and building, the district,
					public transportation and schools around. Tell me what you want, I’ll
					find you what you need.{" "}
				</p>
				<p>
					For rent, it’s approximately between 30 and 50€ a square meter, but
					again it really depends of many features such as quality of the building
					and furniture, area, rental period, services included...
				</p>
				<h1>Services for owners and tenants</h1>

				<p>
					My main mission is to introduce serious tenants to serious owners. My
					fee is paid by the tenant and I therefore ask reasonable amounts from
					the owners.
				</p>
				<p>
					My oral advices on the phone or in person are free to establish a
					relation of trust between both parties.
				</p>
				<p>
					Basically the owner has to deliver a clean and functional apartment and
					the tenant has to pay on time.
				</p>
				<p>
					To save time, little problems can be solved by the owner, but I will be
					glad to help, to translate or to resolve problems myself.
				</p>

				<p>
					My fee to go check out the flat will be of 50€, but it will be possible
					to video call me to show me what’s wrong.
				</p>

				<p>Just contact me, there’s pretty much nothing I cannot do !</p>
			</SectionTextContainerMobile>
		</>
	);
}

const SectionTextContainer = styled.div`
	background-color: #2f2f2f;
	color: white;
	padding: 2rem 2rem 3rem 2rem;
	h1 {
		font-size: 36px;
	}

	@media screen and (max-width: 768.5px){
		display: none;
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
`;

const SectionTextContainerMobile = styled.div`
	padding: 8rem 2rem 3rem 2rem;

	h1 {
		margin-top: 2rem;
		line-height: 1.3;
		font-size: 24px;
		font-weight: 500;
	}

	span {
		font-family: "Croissant One", cursive;
	}

	p {
		margin-top: 1rem;
		font-size: 18px;
	}

	@media screen and (min-width: 768.2px){
		display: none;
	}

`;

const StayInParis = styled.div`
	display: flex;
	justify-content: space-between;

	h1 {
		font-family: 48px;
		line-height: 1.2;
		margin-bottom: 2.5rem;

		@media screen and (min-width: 2550px) {
			margin-top: 5rem;
		}
	}

	span {
		font-family: "Croissant One", cursive;
	}

	p {
		margin-top: 1rem;
		font-size: 16px;
		font-weight: 300;
		line-height: 1.2;

		@media screen and (min-width: 1440px) {
			font-size: 18px;
		}

		@media screen and (min-width: 2550px) {
			font-size: 20px;
		}
	}

	.left {
		width: 50%;
	}

	.right {
		position: relative;
		width: 50%;
	}
`;

const Paris1 = styled.div`
	position: absolute;
	top: 130px;
	right: -50px;
	z-index: 1;
	box-shadow: 0 0.5rem 4rem rgba(${bgCircle}, 0.4);
	outline-offset: 1rem;
	transition: all 0.2s;
	:hover {
		outline: 1rem solid ${bgCircle};
		transform: scale(1.05) translateY(-0.5rem);
		box-shadow: 0 2.5rem 4rem rgba(${bgCircle}, 0.5);
		z-index: 20;
	}

	@media screen and (min-width: 1440px) {
		top: 100px;
		right: 0px;
	}
	@media screen and (min-width: 2550px) {
		top: 200px;
		right: 200px;
	}
`;
const Paris2 = styled(Paris1)`
	position: absolute;
	top: 260px;
	right: -20px;
	z-index: 0;

	@media screen and (min-width: 1440px) {
		top: 230px;
		right: 50px;
	}
	@media screen and (min-width: 2550px) {
		top: 320px;
		right: 250px;
	}
`;
const Paris3 = styled(Paris1)`
	position: absolute;
	top: 400px;
	right: 120px;

	@media screen and (min-width: 1440px) {
		top: 360px;
		right: 200px;
	}

	@media screen and (min-width: 2550px) {
		top: 450px;
		right: 400px;
	}
`;

const ListYourProperty = styled.div`
	margin-top: 4rem;
	display: flex;
	justify-content: space-between;
	h1 {
		font-family: 48px;
		line-height: 1.2;
		margin-top: 2rem;
		margin-bottom: 2.5rem;
	}

	p {
		margin-top: 1rem;
		font-size: 18px;
		font-weight: 300;
		line-height: 1.2;
	}

	.left {
		width: 50%;

		margin-left: 1.5rem;

		@media screen and (min-width: 1024px) {
			padding-left: 2rem;
		}

		@media screen and (min-width: 1440px) {
			padding-left: 2rem;
		}
	}

	.right {
		width: 50%;
	}
`;
const RealEstatePriceInParis = styled(ListYourProperty)`
	h1 {
		margin-top: 0;
		font-size: 28px;
	}
	.left {
		width: 55%;

		@media screen and (min-width: 1024px) {
			padding-left: 0rem;
		}

		@media screen and (min-width: 1440px) {
			padding-left: 0rem;
		}
	}
	.right {
		width: 45%;

		@media screen and (min-width: 1024px) {
			padding-left: 5rem;
		}

		@media screen and (min-width: 1440px) {
			padding-left: 10rem;
		}
	}
`;
const ServicesForOwnersAndTenants = styled(RealEstatePriceInParis)`
	.left {
		width: 35%;
		margin-left: 1.5rem;
		margin-top: 5rem;

		@media screen and (min-width: 1024px) {
			padding-left: 2rem;
		}

		@media screen and (min-width: 1440px) {
			padding-left: 2rem;
		}
		@media screen and (min-width: 2550px) {
			padding-left: 2rem;
			margin-top: 0;
		}
	}

	.right {
		width: 65%;
	}
`;

const RectangleBackground = styled.div`
	position: absolute;
	top: -20px;
	right: 20px;
	width: 200px;
	height: 70px;
	z-index: -1;
	background-color: ${bgColorPrimary};

	@media screen and (min-width: 768px) {
		right: 100px;
		width: 300px;
		height: 100px;
	}
`;

const RectangleBackgroundContainer = styled.div`
	position: relative;
`;
