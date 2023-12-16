import { Card } from '@/components/organisms/Card/Card';
import InputExample from '@/components/atoms/exampleInput/InputExample';
import Textarea from '@/components/atoms/textarea/Textarea';
import LabelInput from '@/components/molecules/labelInput/LabelInput';
import Template from '@/components/templates/Template';
import React from 'react';
import styled from 'styled-components';

const NewPage = () => {
  return (
    <Template>
      <Card>
        <ExampleWrapper>
          <LabelInput
            text="نام"
            id="name"
            htmlFor="name"
            width="80px"
            placeholder="hhhh"
            type="text"
          />
          {/* <LabelInput
            text="نام خانوادگی"
            placeholder="نام خانوادگی خود را وارد نمایید"
            id="lastName"
            htmlFor="lastName"
          />
          <LabelInput text="سن" placeholder="سن خود را وارد نمایید...." />
          <InputExample id="lastInput" className="lastInput" /> */}
        </ExampleWrapper>
        <br />
        <Textarea cols={5} rows={2} placeholder="sgh" id="text" />
        <LabelInput width="200px" text="نام خانوادگی" type="text" />
      </Card>
    </Template>
  );
};

const ExampleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    cursor: pointer;
  }
  :nth-child(3) input {
    color: green;
  }
  #lastInput {
    border: 1px solid blue;
  }
  .lastInput {
    background-color: pink;
  }
`;

export default NewPage;
