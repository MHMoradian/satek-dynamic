import React, { useState } from 'react';
import styled from 'styled-components';
interface IProps {
  placeholder?: string;
  rows?: number;
  cols?: number;
  id?: string;
}

const Textarea = ({ placeholder, rows = 4, cols = 6, id }: IProps) => {
  return (
    <TextAreaWrraper
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      id={id}
    ></TextAreaWrraper>
  );
};

export default Textarea;

const TextAreaWrraper = styled.textarea`
  outline: none;
  padding-right: 4px;
  border-radius: 8px;
  border: 1px solid #aaa;
  &:focus::placeholder {
    opacity: 0;
    color: transparent;
  }
`;
