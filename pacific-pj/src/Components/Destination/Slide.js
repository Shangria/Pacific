import React from "react";

export const Slide=({slide})=>{
    return(
        <li className="glide__slide"
            style={{backgroundImage: `url(${slide.img})`}}>
            <div className="destination__slide-title">
                <p>{slide.country}</p>
            </div>
            <div className="destination__slide-quantity">
                <p>{slide.quantity}</p>
            </div>
        </li>
    )
};