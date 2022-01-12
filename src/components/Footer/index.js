import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import {
  FooterContainer,
  FooterAddress,
  AddressTitle,
  AddressText,
  FooterContact,
  ContactTitle,
  ContactText,
  FooterMedias,
  MediasTitle,
  MediasContainer,
  MediasLink,
  MediaIcon,
} from "./FooterElement.js";

const index = () => {
  return (
    <FooterContainer id="contact">
      <FooterAddress>
        <AddressTitle>Endereços</AddressTitle>
        <AddressText>Av. Washington Soares 2040</AddressText>
        <AddressText>Av. Maestro Lisboa 3040</AddressText>
        <AddressText>Av. José Leon 1040</AddressText>
      </FooterAddress>
      <FooterContact>
        <ContactTitle>Contatos</ContactTitle>
        <ContactText>(85) 1 2345-6789</ContactText>
        <ContactText>(85) 1 2345-6789</ContactText>
      </FooterContact>
      <FooterMedias>
        <MediasTitle>Sociais</MediasTitle>
        <MediasContainer>
          <MediasLink href="#" target="_blank">
            <MediaIcon>
              <FaFacebook />
            </MediaIcon>
            Facebook
          </MediasLink>
        </MediasContainer>
        <MediasContainer>
          <MediasLink href="#" target="_blank">
            <MediaIcon>
              <FaInstagram />
              Instagram
            </MediaIcon>
          </MediasLink>
        </MediasContainer>
        <MediasContainer>
          <MediasLink href="#" target="_blank">
            <MediaIcon>
              <FaTwitter />
            </MediaIcon>
            Twitter
          </MediasLink>
        </MediasContainer>
      </FooterMedias>
    </FooterContainer>
  );
};

export default index;
