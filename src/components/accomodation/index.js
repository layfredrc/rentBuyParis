import styled from "styled-components";
import AccomodationServices from "../accomodationServices";
import AccomodationDetails from "../accomodationDetails";
import RoomAmenities from "../roomAmenities";
import AccomodationCalendar from "../accomodationCalendar";
import Map from "../map";
export default function AccomodationDetail() {
	return (
		<AccomodationDetailContainer>
			<RowWrapper>
				<ColWrapper>
					<AccomodationDetails />
					<AccomodationServices />
				</ColWrapper>
				<DesktopCalendarWrapper>
					<AccomodationCalendar />
				</DesktopCalendarWrapper>
			</RowWrapper>
			<RoomAmenities />
			<RowWrapperTablet>
				<Map />
				<MobileCalendarWrapper>
					<AccomodationCalendar />
				</MobileCalendarWrapper>
			</RowWrapperTablet>
		</AccomodationDetailContainer>
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
	margin-right: 200px;
	@media screen and (max-width: 1023px) {
		display: none;
	}
`;

const AccomodationDetailContainer = styled.div`
	@media screen and (min-width: 1440px) {
		padding: 0rem 12rem 0rem 12rem;
	}
	@media screen and (min-width: 2550px) {
		padding: 0rem 25rem 0rem 25rem;
	}
`;
