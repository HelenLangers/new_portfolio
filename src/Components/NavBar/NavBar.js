import React from 'react'
import HelenLogo from './HelenLogo.png';
import {Nav, NavLink, Bars, NavMenu, Image, Wave, WaveSVG } from './NavBarElements';

function NavBar({toggle}) {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <Image src={HelenLogo}/>
                </NavLink>

                <Bars onClick={toggle}/>

                <NavMenu>
                    <NavLink to="/about"
                        activeStyle>
                        About
                    </NavLink>

                    <NavLink to="/projects"
                        activeStyle>
                        Projects
                    </NavLink>

                    <NavLink to="/cycling"
                        activeStyle>
                        Cycling
                    </NavLink>

                    <NavLink to="/media"
                        activeStyle>
                        Media
                    </NavLink>

                    <NavLink to="/contact"
                        activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>

        <div>
            <WaveSVG data-name="Layer1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1340 200"
                preserveAspectRatio="none"
                >
            <path fill="#7B5C6E" fill-opacity="1" d="M0,128L1440,64L1440,0L0,0Z"></path></WaveSVG>
        </div>
        </>
    )
}

export default NavBar

