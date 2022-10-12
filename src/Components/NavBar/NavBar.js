import React from 'react'
import HelenLogo from './HelenLogo.png';
import {Nav, NavLink, Bars, NavMenu, Image} from './NavBarElements';

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
        </>
    )
}

export default NavBar