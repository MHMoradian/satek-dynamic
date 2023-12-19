import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { errors } from "undici-types";

interface IProps {
  placeholder?: string;
  id?: string;
  className?: string;
  width?: string;
  type: string;

  name: string;
  required?: string;
  errors: any;
  register: any;
  // validationSchema: any;
  maxLength?: number;
  label?: string;
}

const InputExample = ({
  placeholder,
  id,
  className,
  width,
  type,
  name,
  required,
  errors,
  register,
  maxLength,
}: // validationSchema,
IProps) => {
  // console.log(errors);
  return (
    <>
      <InputWrapper
        placeholder={placeholder}
        id={id}
        className={className}
        width={width}
        type={type}
        name={name}
        // label={label}
        {...register(name, { required: required, maxLength: maxLength })}
        // aria-invalid={errors[name] ? "true" : "false"}
      />

      {errors[name] && <p>{errors[name].type}</p>}
    </>
  );
};

export default InputExample;

const InputWrapper = styled.input`
  border: 1px solid #aaa;
  color: black;
  outline: none;
  padding: 0.5rem;
  &:focus {
    border: 1px solid #4579dc;
  }
  &:focus::placeholder {
    opacity: 0;
    color: transparent;
  }
  border-radius: 40px;
  width: ${({ width }) => width || "200px"};
`;
