import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IProps {
  placeholder?: string;
  id?: string;
  className?: string;
  width?: string;
  type: string;
}

const InputExample = ({ placeholder, id, className, width, type }: IProps) => {
  return (
    <InputWrapper
      placeholder={placeholder}
      id={id}
      className={className}
      width={width}
      type={type}
    />
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
  width: ${({ width }) => width || '200px'};
`;
