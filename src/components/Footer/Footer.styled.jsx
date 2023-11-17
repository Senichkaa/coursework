import styled from 'styled-components';
import variables from 'common/Variables';

export const FooterSection = styled.footer`
  padding-top: 80px;
`;

export const FooterContWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 220px;
  padding: 30px 20px 20px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${variables.headerBgc};
  border-top: 1px solid ${variables.headerBorderColor};
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  &::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    bottom: 1px;
    right: 0px;
    background-color: ${variables.linkColor};
  }
`;

export const FooterCopyrightCont = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variables.headerBgc};
  padding: 15px 0 20px 0;
`;

export const NameSpan = styled.span`
  color: ${variables.logoPrimary};
`;

export const SecondNameSpan = styled(NameSpan)`
  color: ${variables.logoSecondary};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const FooterImage = styled.img`
  width: 250px;
`;

export const ImageWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: ${variables.logoPrimary};
`;

export const FooterAddress = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ContactsLink = styled.a`
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 1.75;
  font-style: normal;
`;

export const SocialsWrapper = styled(Wrapper)`
  flex-direction: row;
  gap: 15px;
`;

export const SocialIcon = styled.a`
  text-decoration: none;
  border-radius: 40px;
  background-color: ${variables.logoSecondary};
  display: flex;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  transition: background-color 250ms ease-out;

  &:hover,
  &:focus {
    background-color: #45490b;
  }
`;

export const RefIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 22px;
  margin-left: 8px;
  background-color: ${variables.linkColor};
  transition: background-color 250ms ease-out;
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: ${variables.serviceTitle};
  }
`;

export const FooterText = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
