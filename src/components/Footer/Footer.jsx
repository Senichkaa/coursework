import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/lmu-trnsprt.png';
import contacts from '../../assets/icon-sprite.svg';
import {
  FooterSection,
  FooterContWrapper,
  FooterCopyrightCont,
  Wrapper,
  FooterTitle,
  FooterAddress,
  FooterContacts,
  FooterImage,
  ContactsLink,
  SocialsWrapper,
  ImageWrapper,
  SocialIcon,
  NameSpan,
  SecondNameSpan,
  RefIcon,
  FooterText,
} from './Footer.styled';
import { Container } from 'common/Container.styled';

function Footer() {
  return (
    <FooterSection>
      <Container>
        <FooterContWrapper>
          <Wrapper>
            <FooterTitle>Contact us</FooterTitle>
            <FooterAddress>
              <FooterContacts>
                <svg width={20} height={20}>
                  <use href={`${contacts}#icon-phone`} />
                </svg>
                <ContactsLink href="tel:+380998889510">
                  +38 (099) 888 95 10
                </ContactsLink>
              </FooterContacts>
              <FooterContacts>
                <svg width={20} height={20}>
                  <use href={`${contacts}#icon-envelope`} />
                </svg>
                <ContactsLink href="mailto:lmunion@gmail.com">
                  lmunion@gmail.com
                </ContactsLink>
              </FooterContacts>
            </FooterAddress>
          </Wrapper>
          <ImageWrapper>
            <NavLink to="/">
              <FooterImage src={logo} alt="logo" />
            </NavLink>
          </ImageWrapper>
          <Wrapper>
            <FooterTitle>Inform yourself</FooterTitle>
            <SocialsWrapper>
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/arsenkapanaiko/"
              >
                <svg width={24} height={24}>
                  <use href={`${contacts}#icon-linkedin`} />
                </svg>
              </SocialIcon>
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
              >
                <svg width={24} height={24}>
                  <use href={`${contacts}#icon-instagram`} />
                </svg>
              </SocialIcon>
              <SocialIcon
                target="_blank"
                rel="noreferrer"
                href="https://web.telegram.org/"
              >
                <svg width={24} height={24}>
                  <use href={`${contacts}#icon-telegram`} />
                </svg>
              </SocialIcon>
            </SocialsWrapper>
          </Wrapper>
        </FooterContWrapper>
      </Container>
      <Container>
        <FooterCopyrightCont>
          <FooterText>
            &copy; 2023 &nbsp; <NameSpan> Luxuriosity</NameSpan> &nbsp;
            <SecondNameSpan> Motor Union</SecondNameSpan> . All rights reserved.
            Developed by&nbsp;
            <a
              href="https://www.linkedin.com/in/arsenkapanaiko/"
              target="_blank"
              rel="noreferrer"
            >
              Arsen Kapanaiko
            </a>
            <RefIcon
              href="https://github.com/Senichkaa"
              target="_blank"
              rel="noreferrer"
            >
              <svg width={24} height={24}>
                <use href={`${contacts}#icon-github`} />
              </svg>
            </RefIcon>
          </FooterText>
        </FooterCopyrightCont>
      </Container>
    </FooterSection>
  );
}

export default Footer;
