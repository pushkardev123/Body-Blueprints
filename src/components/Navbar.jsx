import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hamburgerVisible, setHamburgerVisible] = useState(true);
    const hamburger = () => {
        setHamburgerVisible(!hamburgerVisible);
        setDropdownVisible(!dropdownVisible);
    }
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        setHamburgerVisible(!hamburgerVisible);
    };

    return (
        <>
            <nav>
                <img src="/logo.svg" alt="" className="logo" />
                <ul className="nav-links">
                    <li><a href="#" className='hovereffect'>Home</a></li>
                    <li><a href="#" className='hovereffect'>About</a></li>
                    <li><a href="#" className='hovereffect'>Contact Us</a></li>
                    <li><a href="#" id="Athletes" className='hovereffect' >Our Athletes</a></li>
                    {hamburgerVisible && (
                        <img src="/hamburger.svg" alt="" id="hamburger" onClick={toggleDropdown} />)}
                </ul>
            </nav>
            {dropdownVisible && (
                <div className="dropdown-menu">

                    <img src="/x-letter.svg" width="15px" alt="" id="close" onClick={hamburger} />
                    <a href="#" className='hovereffect'>Home</a>
                    <a href="#" className='hovereffect'>About</a>
                    <a href="#" className='hovereffect'>Contact Us</a>
                    <a href="#" id='Athletes' className='hovereffect'>Our Athletes</a>
                </div>
            )}
        </>
    );
};

export default Navbar;
