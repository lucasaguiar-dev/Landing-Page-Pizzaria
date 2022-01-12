import styled from 'styled-components';
import FeaturePic from '../../../src/images/featured3.jpg'

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0,0.1)),
    url(${FeaturePic});
    height:calc(100vh - 80px);
    background-position: center;
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`;

export const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding:0.6rem 3rem;
    border: none;
    background: #F2C879;
    color: #000;
    transition: 0.2s ease-out;

    &:hover {
        color: #fff;
        background: #D91604;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;