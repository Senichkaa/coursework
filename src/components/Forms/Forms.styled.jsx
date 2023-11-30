import variables from 'common/Variables';
import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${variables.headerBorderColor};
  border-radius: 10px;

  width: 280px;
  height: 350px;
`;

export const Title = styled.h3`
  width: 280px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.8px;
  color: ${variables.linkColor};
  margin-bottom: 30px;
`;
export const TitleSpan = styled.span`
  color: ${variables.logoPrimary};
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  color: ${variables.headerBgc};
`;
export const FormInput = styled.input`
  height: 35px;
  width: 220px;
  border-radius: 8px;
  border: none;
  margin: 12px 0 0 0;
  padding: 10px;

  font-size: 14px;
  letter-spacing: 1.25px;

  transition: outline 250ms ease-in-out, outline-color 250ms ease-in-out,
    background-color 250ms ease-in-out;
  &:hover,
  &:focus {
    outline: 2px solid;
    outline-color: ${variables.logoSecondary};
    background-color: #edecec;
  }
`;

export const FormButton = styled.button`
  margin: 20px 0 0 0;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: 0.9px;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    outline 250ms ease-in-out;

  &:hover {
    background-color: ${variables.logoSecondary};
    color: ${variables.linkColor};
    outline: 2px solid ${variables.advantageRectBg};
  }
`;

