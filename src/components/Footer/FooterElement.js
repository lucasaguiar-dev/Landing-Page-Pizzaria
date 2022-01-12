import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: black;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 4;
  justify-items: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  } ;
`;

export const FooterAddress = styled.div`
  width: 20vw;
  margin-left: 13vw;
  color: #fff;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    width: 80vw;
  } ;
`;

export const AddressTitle = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
`;

export const AddressText = styled.p`
  margin-bottom: 0.6rem;
  width: 100%;
  text-align: center;
`;

export const FooterContact = styled.div`
  width: 20vw;
  color: #fff;

  @media screen and (max-width: 800px) {
    width: 80vw;
  } ;
`;

export const ContactTitle = styled.h1`
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const ContactText = styled.p`
  margin-bottom: 0.6rem;
  text-align: center;
`;

export const FooterMedias = styled.div`
  width: 20vw;
  margin-right: 13vw;
  color: #fff;

  @media screen and (max-width: 800px) {
    margin-right: 0;
    width: 80vw;
  } ;
`;

export const MediasTitle = styled.h1`
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const MediasContainer = styled.div`
  margin-bottom: 0.6rem;
  text-align: center;
  justify-content: center;
  background-color: red;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3;
`;

export const MediasLink = styled.div`
  color: white;
  text-decoration: none;
`;

export const MediaIcon = styled.div`
  background: transparent;
  border: transparent;
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
`;
