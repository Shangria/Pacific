import React from "react";
import {Container} from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <Container>
                    <div className='hero__wrapper'>
                        <div className='hero__title-container'>
                            <h2 className='hero__min-title'>Welcome to Pacific</h2>
                            <h1 className='hero__title'>Discover Your Favorite Place with Us</h1>
                            <p className='hero__text'>Travel to the any corner of the world, without going around in circles</p>
                        </div>
                       <div className='hero__video'>
                           <a href='/'>
                               <BsFillCaretRightFill  style={{ color: '#F15D30', fontSize: 30 }} />
                           </a>
                       </div>
                    </div>
                </Container>
            </section>
        </>
    )
};

export default Hero;