// Components 
import AccomodationServices from "../accomodationServices";
import AccomodationDetails from "../accomodationDetails";
import RoomAmenities from "../roomAmenities";
import AccomodationCalendar from "../accomodationCalendar";
import AccomodationGallery from "../accomodationGallery";
import Map from "../map";

// Style
import styled from "styled-components";

export default function AccomodationDetail({ accomodation }) {

	return (
		<>
			<AccomodationDetailContainer>
				<AccomodationGallery accomodation={accomodation?.data} />
				<RowWrapper>
					<ColWrapper>
						<AccomodationDetails accomodation={accomodation?.data} />
						<AccomodationServices />
					</ColWrapper>
					<DesktopCalendarWrapper>
						<AccomodationCalendar accomodation={accomodation?.data} />
					</DesktopCalendarWrapper>
				</RowWrapper>
				<RoomAmenities accomodation={accomodation?.data} />
				<RowWrapperTablet>
					<Map accomodation={accomodation?.data} />
					<MobileCalendarWrapper>
						<AccomodationCalendar accomodation={accomodation?.data} />
					</MobileCalendarWrapper>
				</RowWrapperTablet>

			</AccomodationDetailContainer>
			<BackgroundColor />

		</>
	);
}

const RowWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;

const RowWrapperTablet = styled.div`
	@media screen and (min-width: 768px) and (max-width: 1024px) {
		display: flex;
		flex-direction: row;
	}
`;

const ColWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const MobileCalendarWrapper = styled.div`
	display: flex;
	justify-content: center;
	@media screen and (min-width: 1024px) {
		display: none;
	}
`;
const DesktopCalendarWrapper = styled.div`
	@media screen and (max-width: 1023px) {
		display: none;
	}
`;

const AccomodationDetailContainer = styled.div`
	
	@media screen and (min-width: 768px) {
		padding: 2rem;
	}
	@media screen and (min-width: 1440px) {
		padding: 0rem 12rem 0rem 12rem;
	}
	@media screen and (min-width: 1800px) {
		padding: 0rem 24rem 0rem 24rem;
	}
	@media screen and (min-width: 2100px) {
		padding: 0rem 35rem 0rem 35rem;
	}
	@media screen and (min-width: 2560px) {
		padding: 0rem 45rem 0rem 45rem;
	}
`;

const BackgroundColor = styled.div`
	background-color: #2f2f2f;
	height: 200px;
	margin-top: -12rem;
	z-index: 1;
`;
