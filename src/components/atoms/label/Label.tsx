import React from 'react';
import styled from 'styled-components';

interface IProps {
  text: string;
  htmlFor?: string;
}

const Label = ({ text, htmlFor }: IProps) => {
  return <LabelWrapper htmlFor={htmlFor}>{text}</LabelWrapper>;
};

export default Label;

const LabelWrapper = styled.label`
  color: #c4c4c4;
  font-size: 12px;
  display: none;
  position: absolute;
  transition: opacity 0.3s ease;
  bottom: 41px;
`;
