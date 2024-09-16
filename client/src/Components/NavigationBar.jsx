import React, { useState } from "react";
import '../CSS/NavigationBar.css';
import { TiShoppingCart } from "react-icons/ti";
import { IoIosPerson, IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`NavigationBar-div ${menuOpen ? "active" : ""}`}>
            <div className="NavigationBar-first-div">logo</div>
            <div className="NavigationBar-middle-div">
                <a href="#">Home</a>
                <a href="../Components/ProductComponent.jsx">Product</a>
                <a href="#">Contact</a>
                <a href="#">Review</a>
            </div>
            <div className="NavigationBar-last-div">
                <IoMdSearch />
                <IoIosPerson />
                <TiShoppingCart />
                <GiHamburgerMenu className="menu-icon" onClick={toggleMenu} />
            </div>
        </div>
    );
}

export default NavigationBar;
