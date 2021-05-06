import React from "react";
import '../../styles/Destination.scss';
import Slider from "./Slider";
import Banner from '../../images/bg_3.jpg';
import { DestinationData} from './DestinationData';
import {Container} from "react-bootstrap";


const Destination = () => {
    return (
        <section className="destination"
                 style={{backgroundImage: `url(${Banner})`}}
        >
            <Container>
                <div className="destination__title-wrap">
                    <h4 className="destination__min-title">Pacific Provide Places</h4>
                    <h2 className="destination__title">Select Your Destination</h2>
                </div>
                <div className="destination__slider-wrapper">
                    <Slider destinationData={DestinationData}/>
                </div>
            </Container>

        </section>
    )
}
export default Destination;