import React from "react";
import NavItem from "./NavItem";
import { Container } from "react-bootstrap";
import { HeaderData } from "../Header/HeaderData";

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <nav className='header__container'>
                    <div className='header__logo'>
                        <span className='header__logo-title'>Pacific</span>
                        <span className='header__logo-min-title'>TRAVEL AGENCY</span>
                    </div>
                    <ul className='header__links'>
                        {
                            HeaderData.map((li, i) =>
                                <NavItem key={i + "headerLink"} li={li}/>
                            )
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
export default Header;