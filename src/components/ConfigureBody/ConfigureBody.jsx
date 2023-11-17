import React from 'react';
import { Container } from 'common/Container.styled';
import bmw from '../../assets/bmw-akrapovic.png';
import {
  ConfigureSection,
  Wrapper,
  MainWrapper,
  TextWrapper,
  ConfigureTitle,
  ConfigureText,
} from './ConfigureBody.styled';

function ConfigureBody() {
  return (
    <ConfigureSection>
      <MainWrapper>
        <Container>
          <Wrapper>
            <div>
              <img width={550} src={bmw} alt="bmw-f90-back" />
            </div>
            <TextWrapper>
              <ConfigureTitle>We apologize!</ConfigureTitle>
              <ConfigureText>
                &nbsp; Currently, the car configuration is not available due to
                technical issues. <br />
                &nbsp; We try to overcome the problems as soon as possible to
                improve our service.
                <br />
                &nbsp; Follow our social medias to keep up to date with all the
                events and updates.
              </ConfigureText>
            </TextWrapper>
          </Wrapper>
        </Container>
      </MainWrapper>
    </ConfigureSection>
  );
}

export default ConfigureBody;
