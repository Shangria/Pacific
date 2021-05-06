import React from "react";
import '../../styles/Destination.scss';
import SimpleSlider from "./Slider";
import Banner from '../../images/bg_3.jpg'


const Destination = () => {
    return (
        <section className="destination"
                 style={{backgroundImage: `url(${Banner})`}}
        >
            <div className="destination__title-wrap">
                <h4 className="destination__min-title">Pacific Provide Places</h4>
                <h2 className="destination__title">Select Your Destination</h2>
            </div>
        </section>
    )
}
export default Destination;