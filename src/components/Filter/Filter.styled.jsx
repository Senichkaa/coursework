import styled from 'styled-components';
import variables from 'common/Variables';

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px 0px 50px 50px;
`;

export const FilterBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const FilterInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: 22px;
  font-weight: 600;
  color: ${variables.logoPrimary};
  letter-spacing: 0.75px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 10px;
  background: ${variables.headerBorderColor};
  border: none;
  outline: none;
  color: #ebebeb;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  height: 34px;
  cursor: default;

  &::placeholder {
    color: ${variables.linkColor};
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 4px;
  right: 10px;
  top: 38px;
  background-color: ${variables.serviceTitle};
  transition: background-color 280ms ease-in-out;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    background-color: ${variables.headerBgc};
  }
`;

export const BrandsDropdown = styled.div`
  position: absolute;
  width: 210px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  top: 100px;
  overflow: auto;
  border-radius: 10px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: ${variables.serviceTitle};
  margin-top: 3px;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: content-box;
    background-color: ${variables.headerBorderColor};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${variables.headerBgc};
  }
`;

export const BrandsUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14px;
  gap: 8px;
`;

export const BrandsLi = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
  color: ${variables.headerBorderColor};
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover,
  &.active {
    color: rgba(18, 20, 23, 0.8);
    font-weight: 600;
  }
`;

export const FilterSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 36px;
  padding: 10px 15px;
  background-color: ${variables.headerBorderColor};
  color: ${variables.linkColor};
  border-radius: 12px;
  font-size: 16px;
  transition: background-color 280ms ease-in-out;

  &:hover,
  &:focus {
    background-color: ${variables.headerBgc};
  }
`;

export const FilterResetButton = styled(FilterSubmitButton)`
  width: 120px;
`;

export const ButtonsSubmit = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 32px;
`;
