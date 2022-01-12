import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    margin-top:-80px;
    font-size:1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease-in-out;

    @media screen and (max-width:960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content:center;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
`;

export const NavLogo = styled(Link)`
    position:absolute;
    left:100px;
    height:100%;
    display:flex;
    color: #fff;
    font-size: 1.5rem;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width:789px) {
        left:50px;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width:789px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display:flex;
    list-style: none;
    
    @media screen and (max-width: 789px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #D91604;
    }
`;



