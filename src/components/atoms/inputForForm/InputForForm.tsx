import React from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import styled from 'styled-components';

interface IProps {
  name: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  className?: string;
}

const InputForForm = ({
  name,
  placeholder,
  register,
  errors,
  className,
}: IProps) => {
  return (
    <Container>
      <Input
        {...register(name)}
        name={name}
        placeholder={placeholder}
        className={className}
      />

      {errors && (
        <>
          <span role="img" aria-label="error">
            ❌
          </span>
          <p>ورودی شما صحیح نیست</p>
        </>
      )}
    </Container>
  );
};

export default InputForForm;

const Container = styled.div`
  p {
    color: red;
    font-size: 12px;
    margin-top: 2px;
  }
  input {
    outline: none;
    border-radius: 20px;
    border: 1px solid #c4c4c4;
    padding: 5px;
    padding-right: 8px;
  }
  span {
    position: relative;
    left: 33px;
    top: 2px;
  }
`;
const Input = styled.input`
  &:focus {
    border: 1px solid #4579dc;
  }
  &:focus::placeholder {
    opacity: 0;
    color: transparent;
  }
  &::placeholder {
    font-size: 10px;
  }
`;
