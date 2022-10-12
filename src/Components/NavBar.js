import React from 'react'
import '../Styling/Nav.css';
import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <div className="nav-bar">
            <nav>
                <ul className='list'>
                    <li>
                        <NavLink to="/about"
                            activeclassname="active"
                            className='about'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects"
                            activeclassname="active"
                            className='projects'>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cycling"
                            activeclassname="active"
                            className='cycling'>
                            Cycling
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/media"
                            activeclassname="active"
                            className='media'>
                            Media
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar