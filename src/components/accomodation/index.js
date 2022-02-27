import styled from "styled-components";
import AccomodationServices from "../accomodationServices";
import AccomodationDetails from "../accomodationDetails";
import RoomAmenities from "../roomAmenities";
export default function AccomodationDetail() {
  return (
    <AccomodationDetailContainer>
      <AccomodationDetails />
      <AccomodationServices />
      <RoomAmenities />
    </AccomodationDetailContainer>
  );
}

const AccomodationDetailContainer = styled.div` 
 
	@media screen and (min-width: 1440px) {
		padding: 0rem 12rem 0rem 12rem;
	}
	@media screen and (min-width: 2550px) {
		padding: 0rem 25rem 0rem 25rem;
	}

`