import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom';
import { FaBars, FaTimes, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { navItems } from './NavItems'
import './NavBar.css'
import Logo from '../../Assets/Images/HelenLogo.png'

const NavBar = () => {

    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

    const closeMobileMenu = () => setHamburgerMenuOpen(false)

    const handleClick = () => setHamburgerMenuOpen(!hamburgerMenuOpen)


  return (
    <header>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <div className='logo-container'>
                    <img src={Logo} className='logo-image' alt="Helen Langridge Logo"/>
                </div>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {hamburgerMenuOpen ? <FaTimes/> : <FaBars />}
            </div>

            <ul className={hamburgerMenuOpen ? "nav-menu active" : "nav-menu"}>
            {navItems.map((item) => {
                return (
                <li key={item.id} className={item.className}>
                    <NavLink to={item.path} className={({ isActive}) => "nav-links" + (isActive ? " activated" : "")} onClick={closeMobileMenu}>
                        {item.title}
                    </NavLink>
                </li>
                )
            })}

            <li><a className='social-icon' href="https://github.com/HelenLangers"><FaGithub/></a>
            </li>
            <li><a className='social-icon' href="https://www.linkedin.com/in/helen-langridge-62b32b166/"><FaLinkedin/></a>
            </li>
            <li><a className='social-icon' href="https://www.instagram.com/helen.langridge/"><FaInstagram/></a>
            </li>
            </ul>
        </div>
    </nav>
    </header>
    )
}

export default NavBar