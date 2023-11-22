import styled from 'styled-components';
import variables from 'common/Variables';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  width: 360px;
  height: 470px;
  background-color: ${variables.advantageRectBg};
  border-radius: 15px;
  border: 1px solid ${variables.logoPrimary};
`;

export const ImageWrapper = styled.div`
  width: 330px;
  height: 200px;
`;
export const CardImage = styled.img`
  width: 330px;
  height: 200px;
  border-radius: 15px;
  object-fit: cover;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  height: 220px;
  justify-content: center;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  margin-bottom: 8px;
  letter-spacing: 0.55px;
  font-size: 18px;
  font-weight: 600;
`;

export const CardTitleSpan = styled.span`
  font-weight: 500;
`;

export const CardDescriptionText = styled.div`
  margin-bottom: 8px;
  font-size: 15px;
  letter-spacing: 0.7px;
`;

export const CardFeaturesText = styled.div`
  margin-bottom: 8px;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
`;

export const FeatureTitle = styled.span`
  color: ${variables.logoPrimary};

  letter-spacing: 0.6px;
  font-weight: 600;
`;

export const FeatureText = styled.div`
  font-size: 13px;
  letter-spacing: 0.6px;
  margin-top: 3px;
`;

export const PriceText = styled.div`
  letter-spacing: 0.6px;
`;
