import styled from 'styled-components';
import variables from 'common/Variables';

export const BackdropWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  max-width: 541px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${variables.headerBgc};
  border-radius: 6px;
  width: 480px;
  z-index: 100;
  height: 560px;
  overflow-y: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: content-box;
    background-color: ${variables.headerBorderColor};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${variables.background};
  }
`;
export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 10px 10px 10px auto;
  fill: ${variables.headerBorderColor};
  transition: fill 250ms ease-in-out;

  &:hover {
    fill: ${variables.serviceTitle};
  }
`;
export const ImagePicture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 290px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  margin-bottom: 8px;
  letter-spacing: 0.55px;
  font-size: 18px;
  font-weight: 600;
  color: ${variables.logoPrimary};
`;

export const ContentWrapper = styled.div`
  width: 430px;
  display: flex;
  flex-direction: column;
`;
export const ContentDescription = styled.div`
  margin-bottom: 8px;
  font-size: 17px;
  letter-spacing: 0.7px;
  margin-right: auto;
`;

export const ContentConfiguration = styled.div`
  font-size: 16px;
  letter-spacing: 0.6px;
  margin-bottom: 10px;
`;

export const Span = styled.span`
  color: ${variables.logoPrimary};

  letter-spacing: 0.6px;
  font-weight: 600;
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FeatureText = styled.div`
  font-size: 16px;
  letter-spacing: 0.6px;
  margin-top: 3px;
`;

export const PriceText = styled.div`
  font-size: 16px;
  letter-spacing: 0.6px;
  margin-bottom: 10px;
`;

export const WarningWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const WarningText = styled.p`
  font-size: 13px;
  letter-spacing: 0.6px;
`;

export const PurchaseButton = styled.button`
  padding: 15px 20px;
  border-radius: 8px;
  /* background-color: #575c0e; */
  background-color: ${props => (props.cartIncluded ? '#761515' : '#575c0e')};
  color: #d3d3d3;
  transition: background-color 250ms ease-out;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin: 0 0 0 auto;
  font-size: 15px;

  &:hover {
    /* background-color: #45490b; */
    background-color: ${props => (props.cartIncluded ? '#961a1a' : '#45490b')};
  }
`;
