import React, { useState } from 'react';
import Sidebar from '../Sidebar';

import { HeroContainer,
                HeroContent,
                HeroItems,
                HeroP,
                HeroH1,
                HeroBtn
            } from './HeroElements'
const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    function goToWhatsapp() {
        window.open('https://wa.me/558592286461?text=Boa%20tarde%20amigo%20o%20bullgod%20existe')
    }

    return (
        <HeroContainer id='home'>
            <Sidebar isOpen={isOpen} toggle={toggle}/> 
            <HeroContent>
                <HeroItems>
                    <HeroH1>A melhor Pizza de Fortaleza</HeroH1>
                    <HeroP>Pronta em 60 segundos</HeroP>
                    <HeroBtn onClick={goToWhatsapp}>
                        Pedir Agora
                    </HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
