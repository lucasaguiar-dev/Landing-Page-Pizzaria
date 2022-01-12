import React, {useState, useEffect } from 'react';
// import {Link} from 'react-scroll'
import { FaBars } from 'react-icons/fa';
import { Nav,
                NavLogo,
                NavbarContainer,
                MobileIcon,
                NavMenu,
                NavItem,
                NavLinks 
            } from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 400) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    }, [])
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='home' spy={true} smooth={true}>Pizzaria</NavLogo>
                     <MobileIcon>
                        <FaBars />
                    </MobileIcon> 
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='products'spy={true} smooth={true}>Cardápio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='promotions' spy={true} smooth={true}>Promoções</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' spy={true} smooth={true}>Contatos</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar
