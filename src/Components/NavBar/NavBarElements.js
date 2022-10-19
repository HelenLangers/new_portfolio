import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #7B5C6E;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px) / 2);
    z-index: 100;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 2rem;
    z-index: 100;

    &.active {
        color: #F2D4AE;
    }
`

export const Image = styled.img`
    width: 16rem;
    margin-top: 2rem;
    z-index: 100;
    filter: brightness(0) invert(1);

    @media screen and (max-width: 768px) {
        width: 10rem;
        margin-top: 0;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const WaveSVG = styled.svg`
    position: relative;
    display: block;
    width: 100%;
    ${'' /* margin-top: -100px; */}
`

