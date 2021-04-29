import React from "react";

const NavItem = ({li}) => {
    return (
        <>
            <li className="header__link">
                <a href='/'>{li.link}</a>
            </li>
        </>
    )
}

export default NavItem;
