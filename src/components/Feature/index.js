import React from 'react';
import {FeatureContainer, FeatureButton} from '../Feature/FeatureElements';
const Feature = () => {
    return (
        <FeatureContainer id='promotions'>
            <h1>Oferta da semana</h1>
            <p>Deliciosa pizza de queijo com azeitonas e tomates</p>
            <FeatureButton>Pedir Agora</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
