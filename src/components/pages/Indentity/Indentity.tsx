import React, { useState } from 'react';
import Template from '@/components/templates/Template';
import { Card } from '@/components/organisms/Card/Card';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import styled from 'styled-components';

const Indentity = () => {
  return (
    <Template>
      <Card $width="1000px" $height="800px">
        <FormPage />
      </Card>
    </Template>
  );
};

export default Indentity;

type FormData = {
  example: string;
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContainerForLabelAndInput = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  position: relative;
`;

const Input = styled.input<{
  isValid: boolean;
  isFocused: boolean;
  placeholderText?: string;
}>`
  width: ${({ width }) => (width ? width : '200px')};
  border-radius: 30px;
  border: 1px solid
    ${({ isValid, isFocused }) => (isFocused ? 'blue' : '#89959f')};

  &::placeholder {
    color: ${({ isFocused }) => (isFocused ? 'transparent' : '#89959f')};
    padding-right: 7px;
    place-content: ${({ placeholder }) => (placeholder ? placeholder : ' ')};
  }
  padding-right: 7px;
  outline: none;
`;

const Label = styled.label<{ isFocused: boolean }>`
  /* margin-bottom: ${({ isFocused }) => (isFocused ? '0' : '4px')}; */

  opacity: ${({ isFocused }) => (isFocused ? '1' : '0.5')};
  display: ${({ isFocused }) => (isFocused ? 'block' : 'none')};
  position: absolute;
  transition: opacity 0.3s ease;
  top: 18px;
  right: 0;
  font-size: 12px;
  color: #c4c4c4;
`;
const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
export const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isFocused, setIsFocused] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //     <input type='text' placeholder='نام شرکت'{...register('example', {required: true, maxLength: 80})} />
    //     <button type='submit'>Submit</button>
    // </form>
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <ContainerForLabelAndInput>
        {isFocused && (
          <Label htmlFor="example" isFocused={isFocused}>
            نام شرکت
          </Label>
        )}
        <Input
          type="text"
          id="examle"
          placeholder="ju"
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          isValid={!errors.example}
          {...register('example', { required: true, maxLength: 80 })}
          onBlur={() => setIsFocused(false)}
          width="400px"
        />
        {errors.example && (
          <>
            <ErrorMessage>مقدار وارد شده صحیح نمی باشد.</ErrorMessage>
            <span role="img" aria-label="warning">
              *
            </span>
          </>
        )}
        <button type="button">Sumbit</button>
      </ContainerForLabelAndInput>
    </FormContainer>
  );
};
