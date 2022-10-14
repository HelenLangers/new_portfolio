import React from 'react'
import { HamburgerContainer, HamburgerWrapper, HamburgerLink, HamburgerMenu, Icon, CloseIcon } from './HamburgerElements';

function Hamburger({toggle, isOpen}) {
  return (
    <HamburgerContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
    <HamburgerWrapper>
        <HamburgerMenu>
            <HamburgerLink to="/" onClick={toggle}>
                Home
            </HamburgerLink>
            <HamburgerLink to="/about" onClick={toggle}>
                About Me
            </HamburgerLink>
            <HamburgerLink to="/projects" onClick={toggle}>
                Projects
            </HamburgerLink>
            <HamburgerLink to="/cycling" onClick={toggle}>
                Cycling
            </HamburgerLink>
            {/* <HamburgerLink to="/media" onClick={toggle}>
                Media
            </HamburgerLink> */}
        </HamburgerMenu>
    </HamburgerWrapper>
    </HamburgerContainer>
  )
}

export default Hamburger