import styled from "styled-components"
export default function Map({ }) {
    return (
        <MapContainer>
            <MapWrapper src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.38714808445!2d2.279050099785478!3d48.85326742853089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67000d925874b%3A0xa7a37b77f6a768b0!2s10%20Rue%20du%20Ranelagh%2C%2075016%20Paris!5e0!3m2!1sfr!2sfr!4v1646009186729!5m2!1sfr!2sfr"
                loading="lazy">
            </MapWrapper>
        </MapContainer>
    );
}

const MapContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`

const MapWrapper = styled.iframe`
    border-radius: 15px;
    width: 260px;
    height: 400px;

    @media screen and (min-width:728px){
        width: 350px;
        height: 600px;
    }

    @media screen and (min-width:1024px){
        width: 960px;
        height: 400px;
    }
    @media screen and (min-width:1440px){
        width: 1000px;
        height: 400px;
    }
`