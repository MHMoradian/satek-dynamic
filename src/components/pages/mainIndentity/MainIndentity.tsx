import Template from '@/components/templates/Template';
import React from 'react';
import { Card } from '@/components/organisms/Card/Card';
import styled from 'styled-components';
import TwoButtons from '@/components/molecules/TwoButtons/TwoButtons';
import { useForm } from 'react-hook-form';
import FormForIndentity from '@/components/molecules/formforindentity/FormForIndentity';

const MainIndentity = () => {
  return (
    <Template>
      <Card $width="800px" $height="566px">
        <Container>
          <h1>اطلاعات هویتی</h1>
          <ContainerForTwoButtons>
            <TwoButtons
              firstText="اطلاعات حقوقی شرکت"
              secondText="اطلاعات حقیقی مالک یا مدیر عامل"
            />
          </ContainerForTwoButtons>

          <FormForIndentity />
        </Container>
      </Card>
    </Template>
  );
};

export default MainIndentity;

const Container = styled.div`
  padding: 50px;
  h1 {
    font-size: 28px;
    margin-bottom: 36px;
  }
`;
const ContainerForTwoButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`;
