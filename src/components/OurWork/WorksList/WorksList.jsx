import React from 'react';
import icons from '../../../assets/icon-sprite.svg';
import {
  WorkIcon,
  WorksListUl,
  WorkLi,
  WorkText,
  WorkTitle,
} from '../WorksList/WorkList.styled';

function WorksList() {
  return (
    <WorksListUl>
      <WorkLi>
        <WorkIcon>
          <svg width={26} height={26}>
            <use href={`${icons}#icon-trophy`} />
          </svg>
        </WorkIcon>
        <WorkTitle>The choice of intellectuals</WorkTitle>
        <WorkText>
          We strive for excellence in customer service and demonstrate exemplary
          quality.
        </WorkText>
      </WorkLi>
      <WorkLi>
        <WorkIcon>
          <svg width={26} height={26}>
            <use href={`${icons}#icon-sack`} />
          </svg>
        </WorkIcon>
        <WorkTitle>Reasonable prices</WorkTitle>
        <WorkText>You only pay for what you want to get as a result.</WorkText>
      </WorkLi>
      <WorkLi>
        <WorkIcon>
          <svg width={26} height={26}>
            <use href={`${icons}#icon-car`} />
          </svg>
        </WorkIcon>
        <WorkTitle>Fulfill dreams</WorkTitle>
        <WorkText>
          The convenient configurator will allow you to build the car of your
          dreams.
        </WorkText>
      </WorkLi>
    </WorksListUl>
  );
}

export default WorksList;
