import InputExample from '@/components/atoms/exampleInput/InputExample';
import Label from '@/components/atoms/label/Label';
import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
interface IProps {
  text: string;
  placeholder?: string;
  id?: string;
  htmlFor?: string;
  width?: string;
  type: string;
  className?: string;
  register: any;
  name: string;
}

const LabelInput = ({
  text,
  placeholder,
  id,
  htmlFor,
  width,
  type,
  name,
}: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <WrapperStyle>
      <Label text={text} htmlFor={htmlFor} />
      <InputExample
        register={register}
        name={name}
        placeholder={placeholder}
        id={id}
        width={width}
        type={type}
        errors={errors}
      />
    </WrapperStyle>
  );
};

const WrapperStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 5px;
  &:focus-within Label {
    display: inline;
  }
`;

export default LabelInput;
