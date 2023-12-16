import Template from '@/components/templates/Template';
import { Card } from '@/components/organisms/Card/Card';
import React from 'react';
import styled from 'styled-components';
import InputExample from '@/components/atoms/exampleInput/InputExample';
import LabelInput from '@/components/molecules/labelInput/LabelInput';
import TwoButtons from '@/components/molecules/TwoButtons/TwoButtons';
import Textarea from '@/components/atoms/textarea/Textarea';
import { Button } from '@/components/atoms/Button';

const NewRequest = () => {
  return (
    <Template>
      <Card $width="800px" $height="600px">
        <Container>
          <h1>ثبت درخواست جدید</h1>
          <ContainerForForm>
            <LabelInput
              placeholder="نام کالا"
              text="نام کالا"
              type="text"
              width="906px"
            />
            <ContainerForMultipeInput>
              <TwoButtons firstText="عادی" secondText="فوری" />
              <LabelInput
                placeholder="مهلت تحویل"
                text="مهلت تحویل"
                type="text"
                width="200px"
              />
              <LabelInput
                placeholder="موجودی"
                text="موجودی"
                type="text"
                width="150px"
              />
              <LabelInput
                placeholder="موردنیاز"
                text="موردنیاز"
                type="text"
                width="150px"
              />
            </ContainerForMultipeInput>
            <Textarea placeholder="توضیحات" cols={121} rows={7} />
            <ContainerForButton>
              <Button color="blue">ثبت درخواست</Button>
            </ContainerForButton>
          </ContainerForForm>
        </Container>
      </Card>
    </Template>
  );
};

export default NewRequest;

const Container = styled.div`
  padding: 50px;
  h1 {
    font-size: 20px;
    margin-bottom: 36px;
    border-bottom: 2px solid #e9e9e9;
    padding-bottom: 39px;
    &::border-bottom {
      margin: 0;
      padding: 0;
      width: 100%;
    }
  }
`;
const ContainerForMultipeInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContainerForButton = styled.div`
  display: flex;
  justify-content: left;
`;
const ContainerForForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 67px;
`;
