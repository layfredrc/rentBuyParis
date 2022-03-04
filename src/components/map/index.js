import styled from "styled-components"
export default function Map({ accomodation }) {
    const { attributes } = accomodation;
    const { googleMapsUrl } = attributes;
    console.log(googleMapsUrl)
    return (
        <MapContainer>
            <MapWrapper src={googleMapsUrl}
                loading="lazy">
            </MapWrapper>
        </MapContainer>
    );
}

const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    @media screen and (min-width:728px) and (max-width:1024px){
        width: 100%;
    }
   
`

const MapWrapper = styled.iframe`
    border-radius: 15px;
    width: 100%;
    height: 400px;

    @media screen and (min-width:375px){
    }
    @media screen and (min-width:425px){
    }

    @media screen and (min-width:728px){
        height: 600px;
    }

    @media screen and (min-width:1024px){
        width: 100%;
        height: 450px;
    }
    @media screen and (min-width:1440px){
    }
`